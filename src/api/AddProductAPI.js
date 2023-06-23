import { GET_API, POST_API, DELETE_API } from './CommonAPI';
import { getHomeImage } from './GameAPI/AddGameAPI';

const addProductAPI = async (token, post, ids, isGame) => {
  console.log(post);
  const team_name = isGame ? post.home : post.content.split(',')[3];
  const content = isGame ? Object.values(post).join(',') : post.content;
  console.log(team_name, content);
  const productData = {
    'product': {
      'itemName': content,
      'price': 100,
      'link': ids.join(','),
      'itemImage': getHomeImage(team_name),
    },
  };
  const data = await POST_API(token, '/product', productData);
  console.log(data);
  return data;
};

const getProductAPI = async (token, accountname) => {
  const data = await GET_API(token, `/product/${accountname}`);
  return data;
};

const getProductByPostIdAPI = async (token, accountname, ids) => {
  const plist = await getProductAPI(token, accountname);
  const data = plist.product.filter((item) => {
    const idlist = item.link.split(',');
    if (idlist.includes(ids[0])) {
      return true;
    }
  });
  console.log(data);
  return data;
};

const getProductDetailAPI = async (token, product_id) => {
  const data = await GET_API(token, `/product/detail/${product_id}`);
  return data;
};

const deleteProductAPI = async (token, accountname, ids) => {
  const plist = await getProductByPostIdAPI(token, accountname, ids);
  const product_id = plist[0].id;
  const data = await DELETE_API(token, `/product/${product_id}`);
  console.log(data);
  return data;
};

export { addProductAPI, getProductAPI, getProductDetailAPI, deleteProductAPI };
