import tokenData from '../../data/sport_bs_users.json';
import gameData from '../../data/baseball_games.json';
import {
  GET_API,
  POST_API,
  POST_API_NO_BODY,
  POST_API_NO_TOKEN,
} from '../CommonAPI';

const postAPI = async (token, content, image = '') => {
  const postData = {
    'post': {
      'content': content,
      'image': image,
    },
  };
  POST_API(token, '/post', postData);
};

// 팀 일정을 포스트하기 위한 함수
const postGameInfo = () => {
  tokenData.forEach((team) => {
    const team_name = team.username.split(' ')[0];
    const token = team.token;
    const filteredGame = gameData.filter(
      (game) => team_name === game.home || team_name === game.away,
    );
    filteredGame.forEach((game) => {
      const content = `${game.date},${game.day},${game.time},${game.home},${game.away},${game.stadium},${game.full_stadium},${game.en_city}`;
      const image = game.date;
      postAPI(token, content, image);
    });
  });
};

const getPostDetailAPI = async (token, id) => {
  const post = await GET_API(token, `/post/${id}`);
  return post;
};

export { getPostDetailAPI };
