import { GET_API, POST_API_NO_BODY, DELETE_API } from './CommonAPI';

const getFollowersAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}/follower`);
  return data;
};
const getFollowingsAPI = async (token, accountname) => {
  const data = await GET_API(token, `/profile/${accountname}/following`);
  return data;
};

const followAPI = async (token, accountname) => {
  const data = await POST_API_NO_BODY(token, `/profile/${accountname}/follow`);
  return data;
};

const unfollowAPI = async (token, accountname) => {
  const data = await DELETE_API(token, `/profile/${accountname}/unfollow`);
  return data;
};
export { getFollowersAPI, getFollowingsAPI, followAPI, unfollowAPI };
