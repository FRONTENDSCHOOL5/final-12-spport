import { GET_API } from './CommonAPI';

const getSearchAPI = async (token, keyword) => {
  const data = await GET_API(token, `/user/searchuser/?keyword=${keyword}`);
  data.sort((a, b) => {
    if (b.accountname.startsWith('SPORT_')) {
      return 1;
    } else {
      return -2;
    }
  });
  return data;
};

export { getSearchAPI };
