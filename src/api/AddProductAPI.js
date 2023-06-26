import { GET_API, POST_API, DELETE_API } from './CommonAPI';
import { getHomeImage } from './GameAPI/AddGameAPI';

const addProductAPI = async (token, post, ids, isGame) => {
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
  const data = await POST_API(token, '/product', productData);
  return data;
};

const getProductAPI = async (token, accountname) => {
  const data = await GET_API(token, `/product/${accountname}`);
  const product =
    data.product &&
    data.product.filter((item) => {
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
  return product;
};

const getProductByPostIdAPI = async (token, accountname, ids) => {
  const plist = await getProductAPI(token, accountname);
  const data = plist.filter((item) => {
    const idlist = item.link.split(',');
    if (idlist.includes(ids[0])) {
      return true;
    } else if (ids.length == 2 && idlist.includes(ids[1])) {
      return true;
    }
  });
  return data;
};

const getProductDetailAPI = async (token, product_id) => {
  const data = await GET_API(token, `/product/detail/${product_id}`);
  return data;
};

const deleteProductAPI = async (token, accountname, ids) => {
  const plist = await getProductByPostIdAPI(token, accountname, ids);
  const product_id = plist[0]?.id;
  const data = await DELETE_API(token, `/product/${product_id}`);
  return data;
};

export { addProductAPI, getProductAPI, getProductDetailAPI, deleteProductAPI };
