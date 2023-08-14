import { GET_API, POST_API_NO_BODY, DELETE_API } from '../CommonAPI';
import { addProductAPI, deleteProductAPI } from '../AddProductAPI';

// token을 가진 유저가 post_id를 좋아요 눌렀는지 확인합니다.
const checkLikeAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  return response.post.hearted;
};

// post_id의 heartCount를 확인합니다.
const getLikeCountAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  return response.post.heartCount;
};

// token을 가진 유저가 post_ids의 좋아요를 true로 업데이트합니다.
// ids = arr 형식으로 받습니다.
const likeGameAPI = async (token, ids, isTeam, post, isGame = false) => {
  const returnArr = [];
  if (isTeam) {
    const data = await addProductAPI(token, post, ids, isGame);
  }
  for (const id of ids) {
    const like = await POST_API_NO_BODY(token, `/post/${id}/heart`);
    returnArr.push(like);
  }

  return returnArr;
};

// token을 가진 유저가 post_ids의 좋아요를 false로 업데이트합니다.
// ids = arr 형식으로 받습니다.
const unlikeGameAPI = async (token, ids, isTeam, accountname) => {
  const returnArr = [];
  if (isTeam) {
    const data = await deleteProductAPI(token, accountname, ids);
  }
  for (const id of ids) {
    const unlike = await DELETE_API(token, `/post/${id}/unheart`);
    returnArr.push(unlike);
  }
  return returnArr;
};

export { checkLikeAPI, likeGameAPI, unlikeGameAPI, getLikeCountAPI };
