import { GET_API } from '../CommonAPI';
import { arrToGame } from '../../util/gameUtil';
import { sortGameByDate } from '../../util/gameUtil';

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

  console.log(Array.from(gameMap));
  // date / time 오름차순 정렬
  const gameArr = sortGameByDate(Array.from(gameMap));
  return gameArr.map((item) => [arrToGame(item[0].split(',')), item[1]]);
};

export { getGameInfo };
