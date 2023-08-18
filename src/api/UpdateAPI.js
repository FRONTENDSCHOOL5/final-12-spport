import tokenData from '../assets/data/sport_users.json';
import bsGameData from '../assets/data/baseball_games.json';
import scGameData from '../assets/data/soccer_games.json';
import vbGameData from '../assets/data/volleyball_games.json';
import { POST_API } from './CommonAPI';
import { getTeamName } from '../util/gameUtil';
import { getTeamToken } from '../util/setGameToken';

const postGameAPI = async (accountname, content, image = '') => {
  const token = getTeamToken(accountname);
  const postData = {
    'post': {
      'content': content,
      'image': image,
    },
  };
  const res = await fetch('https://api.mandarin.weniv.co.kr/post', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const json = await res.json();
  console.log(json);
};

// 팀 일정을 포스트하기 위한 함수
const postGameInfo = () => {
  tokenData.forEach((team) => {
    const team_name = getTeamName(team.username, team.accountname);
    const filteredGame = vbGameData.filter(
      (game) => team_name === game.home || team_name === game.away,
    );
    filteredGame.forEach((game) => {
      const content = `${game.date},${game.day},${game.time},${game.home},${game.away},${game.stadium},${game.full_stadium},${game.en_city}`;
      postGameAPI(team.accountname, content);
    });
  });
};

const getTeamTokenAPI = async (email, password) => {
  const userData = {
    'user': {
      'email': email,
      'password': password,
    },
  };
  const data = await POST_API('/user/login', userData);
  return data.user.token;
};

export { postGameInfo, getTeamTokenAPI };
