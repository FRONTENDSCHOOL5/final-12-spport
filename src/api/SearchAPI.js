import { GET_API } from './CommonAPI';

const getSearchAPI = async (keyword) => {
  const data = await GET_API(`/user/searchuser/?keyword=${keyword}`);
  data.sort((a, b) => {
    if (b.accountname.startsWith('SPORT_')) {
      return 1;
    } else {
      return -2;
    }
  });

  return data.filter((item) => {
    if (
      item.accountname !== 'SPORT_' &&
      item.accountname !== 'SPORT_BS_kiwwom_heroes'
    ) {
      return true;
    }
  });
};

export { getSearchAPI };
