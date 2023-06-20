import { GET_API } from './CommonAPI';

const getProfileAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}`);
  return data;
};

export { getProfileAPI };
