import { GET_API, POST_API_NO_BODY, DELETE_API } from '../CommonAPI';

const checkLikeAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  return response.post.hearted;
};

// ids = arr 형식으로 받습니다.
const likeGameAPI = (token, ids) => {
  ids.forEach((item) => {
    POST_API_NO_BODY(token, `/post/${item}/heart`);
  });
  console.log('like');
};

// ids = arr 형식으로 받습니다.
const unlikeGameAPI = (token, ids) => {
  ids.forEach((item) => {
    DELETE_API(token, `/post/${item}/unheart`);
  });
  console.log('unlike');
};

export { checkLikeAPI, likeGameAPI, unlikeGameAPI };
