import { useQuery, useMutation, useQueryClient } from 'react-query';
import { GET_API, POST_API, DELETE_API } from '../api/CommonAPI';
import { getHomeImage } from '../util/gameUtil';

function useProductQuery(accountname, all = false) {
  const getProduct = async () => {
    return await GET_API(`/product/${accountname}/?limit=Number`);
  };
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['product', accountname],
    queryFn: () => getProduct(),
  });

  let filteredData;
  if (!isLoading && !isError) {
    if (all) {
      filteredData = data.product;
    } else {
      filteredData = data.product.filter((item) => {
        const today = new Date();
        const date = new Date(item.itemName.split(',')[0]);
        const time = item.itemName.split(',');
        if (time.length >= 3) {
          const timesplit = time[2].split(':');
          if (timesplit.length >= 2) {
            date.setHours(timesplit[0], timesplit[1], 0, 0);
          }
        }
        if (today < date) {
          return true;
        }
      });
    }
  }
  return {
    product: filteredData,
    isProductLoading: isLoading,
    isProductError: isError,
    productRefetch: refetch,
  };
}

function useAddProductMutation() {
  const queryClient = useQueryClient();
  const addProduct = async (data) => {
    const { post, ids, isGame } = data;
    const team_name = isGame ? post.home : post.content.split(',')[3];
    const content = isGame ? Object.values(post).join(',') : post.content;
    const productData = {
      'product': {
        'itemName': content,
        'price': 100,
        'link': ids.join(','),
        'itemImage': getHomeImage(team_name),
      },
    };
    return await POST_API('/product', productData);
  };
  return useMutation(async (data) => addProduct(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['product'],
        refetchType: 'active',
      });
    },
  });
}

function useDeleteProductMutation(accountname) {
  const { product } = useProductQuery(accountname);
  const queryClient = useQueryClient();

  const getProductByPostId = async (product, ids) => {
    const plist = product.filter((item) => {
      const idlist = item.link.split(',');
      if (idlist.includes(ids[0])) {
        return true;
      } else if (ids.length == 2 && idlist.includes(ids[1])) {
        return true;
      }
    });
    return plist;
  };

  const deleteProduct = async (ids) => {
    if (product) {
      const plist = await getProductByPostId(product, ids);
      const promiseArr = plist.map(async (item) => {
        const res = await DELETE_API(`/product/${item.id}`);
        return res;
      });
      return Promise.all(promiseArr);
    }
  };
  return useMutation((ids) => deleteProduct(ids), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['product'],
        refetchType: 'active',
      });
      console.log(data);
    },
  });
}

export { useProductQuery, useAddProductMutation, useDeleteProductMutation };
