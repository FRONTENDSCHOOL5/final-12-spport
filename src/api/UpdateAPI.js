import tokenData from '../../assets/data/sport_users.json';
import bsGameData from '../../assets/data/baseball_games.json';
import { POST_API } from '../CommonAPI';

const postAPI = async (content, image = '') => {
  const postData = {
    'post': {
      'content': content,
      'image': image,
    },
  };
  POST_API('/post', postData);
};

// 팀 일정을 포스트하기 위한 함수
const postGameInfo = () => {
  tokenData.forEach((team) => {
    const team_name = team.username.split(' ')[0];
    const filteredGame = bsGameData.filter(
      (game) => team_name === game.home || team_name === game.away,
    );
    filteredGame.forEach((game) => {
      const content = `${game.date},${game.day},${game.time},${game.home},${game.away},${game.stadium},${game.full_stadium},${game.en_city}`;
      const image = '';
      postAPI(content, image);
    });
  });
};

const updateTeamToken = () => {
  tokenData.forEach(async (team) => {
    const userData = {
      'user': {
        'email': team.email,
        'password': team.password,
      },
    };
    const data = await POST_API('/user/login', userData);
  });
};
