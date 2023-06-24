import { GET_API } from './CommonAPI';

const getProfileAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}`);
  return data;
};

const getUserPostAPI = async (token, accountname) => {
  const data = await GET_API(token, `/post/${accountname}/userpost`);
  return data;
};

export { getProfileAPI, getUserPostAPI };
