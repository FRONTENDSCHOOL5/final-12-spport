import { GET_API } from '../CommonAPI';
import tokenData from '../../data/sport_bs_users.json';

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
      const date = new Date(item.content.split(',')[0]);
      const time = item.content.split(',')[2].split(':');
      date.setHours(time[0], time[1], 0, 0);
      if (today <= date) {
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

export {
  getGameInfo,
  getHomeImage,
  getTeamName,
  filterGameInfo,
  sortGameByDate,
  arrToGame,
};
