import { GET_API } from './CommonAPI';

const getFollowersAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}/follower`);
  return data;
};
const getFollowingsAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}/following`);
  return data;
};
export { getFollowersAPI, getFollowingsAPI };
