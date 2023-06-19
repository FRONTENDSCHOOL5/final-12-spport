import { GET_API, POST_API_NO_BODY, DELETE_API } from '../CommonAPI';
import { sortGameByDate, arrToGame } from './AddGameAPI';

// token을 가진 유저가 post_id를 좋아요 눌렀는지 확인합니다.
const checkLikeAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  return response.post.hearted;
};

// post_id의 heartCount를 확인합니다.
const getLikeCountAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  console.log(response);
  return response.post.heartCount;
};

// post_id의 comment를 반환합니다.
const getCommentAPI = async (token, id) => {
  const response = await GET_API(token, `/post/${id}`);
  return response.post.comments;
};

// token을 가진 유저가 post_ids의 좋아요를 true로 업데이트합니다.
// ids = arr 형식으로 받습니다.
const likeGameAPI = async (token, ids) => {
  const returnArr = [];
  for (const id of ids) {
    const like = await POST_API_NO_BODY(token, `/post/${id}/heart`);
    returnArr.push(like);
  }
  return returnArr;
};

// token을 가진 유저가 post_ids의 좋아요를 false로 업데이트합니다.
// ids = arr 형식으로 받습니다.
const unlikeGameAPI = async (token, ids) => {
  const returnArr = [];
  for (const id of ids) {
    const unlike = await DELETE_API(token, `/post/${id}/unheart`);
    returnArr.push(unlike);
  }
  console.log('unlike');
  return returnArr;
};

// token을 가진 유저가 like를 누른 포스트만 필터링합니다.
const getLikedGameAPI = async (token) => {
  const posts = await GET_API(token, '/post/feed?limit=1000');
  const game = posts.posts.filter((item) => {
    if (item.author.accountname.startsWith('SPORT_') && item.hearted == true) {
      const today = new Date();
      const date = new Date(item.image);
      if (today < date) {
        return true;
      }
    }
  });

  // 중복되는 게임 map으로 묶기 (key: content, value: [post_ids])
  const gameMap = new Map();
  game.forEach((item) => {
    if (gameMap.has(item.content)) {
      gameMap.set(item.content, [...gameMap.get(item.content), item.id]);
    } else {
      gameMap.set(item.content, [item.id]);
    }
  });

  const gameArr = sortGameByDate(Array.from(gameMap));
  return gameArr.map((item) => [arrToGame(item[0].split(',')), item[1]]);
};

export {
  checkLikeAPI,
  likeGameAPI,
  unlikeGameAPI,
  getLikedGameAPI,
  getLikeCountAPI,
  getCommentAPI,
};
