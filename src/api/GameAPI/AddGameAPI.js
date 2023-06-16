import {
  GET_API,
  POST_API,
  POST_API_NO_BODY,
  POST_API_NO_TOKEN,
} from '../CommonAPI';
import tokenData from '../../data/sport_bs_users.json';

const url = 'https://api.mandarin.weniv.co.kr';
const test_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

// get TEAM IMAGE from team tokenData
const getHomeImage = (team_name) => {
  const team = tokenData.filter(
    (item) => item.username.split(' ')[0] === team_name,
  );
  return team[0].image;
};

// get TEAM NAME from team tokenData
const getTeamName = () => {
  const team = tokenData.map((item) => item.username.split(' ')[0]);
  team.unshift('전체');
  return team;
};

// Conver Arr to Game Object
const arrToGame = (gameArr) => {
  const image = getHomeImage(gameArr[3]);
  return {
    'date': gameArr[0],
    'day': gameArr[1],
    'time': gameArr[2],
    'home': gameArr[3],
    'away': gameArr[4],
    'stadium': gameArr[5],
    'full_stadium': gameArr[6],
    'en_city': gameArr[7],
    'image': image,
  };
};

// date / time 오름차순 정렬
const sortGameByDate = (gameArr) => {
  return gameArr.sort((a, b) => {
    const infoA = a[0].split(',');
    const infoB = b[0].split(',');
    const dateA = new Date(infoA[0]);
    const dateB = new Date(infoB[0]);
    if (dateA > dateB) {
      return 1;
    } else if (dateA < dateB) {
      return -2;
    } else {
      if (infoA[2] > infoB[2]) {
        return 1;
      } else {
        return -2;
      }
    }
  });
};

// get Game info with API
// sort them in increasing order of date and time
const getGameInfo = async (token) => {
  const posts = await GET_API(token, '/post/feed?limit=1000');
  const game = posts.posts.filter((item) => {
    if (item.author.accountname.startsWith('SPORT_')) {
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

  // date / time 오름차순 정렬
  const gameArr = sortGameByDate(Array.from(gameMap));
  return gameArr.map((item) => [arrToGame(item[0].split(',')), item[1]]);
};

// filter by type and team
const filterGameInfo = (game, type, team) => {
  if (team === '전체') {
    return game;
  }
  return game.filter((item) => item[0].home === team || item[0].away === team);
};

// API
// const getPostById = async (token, id) => {
//   return await GET_API(token, `/post/${id}`);
// };

// const likeGameAPI = async (id) => {
//   const reqUrl = url + `/post/${id}/heart`;
//   const res = await fetch(reqUrl, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${test_token}`,
//       'Content-type': 'application/json',
//     },
//   });
//   const json = await res.json();
//   return json;
// };

export { getGameInfo, getHomeImage, getTeamName, filterGameInfo, arrToGame };
