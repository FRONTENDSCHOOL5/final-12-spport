import { sortGameByDate, arrToGame } from '../util/gameUtil';
import { useFeedQuery } from './usePost';

const filterGame = (data) => {
  if (!data) {
    return [];
  }
  const game = data.posts.filter((item) => {
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
    const content = item.content + `,${item.author.accountname.slice(6, 8)}`;
    if (gameMap.has(content)) {
      gameMap.set(content, [...gameMap.get(content), item.id]);
    } else {
      gameMap.set(content, [item.id]);
    }
  });

  // date / time 오름차순 정렬
  const gameArr = sortGameByDate(Array.from(gameMap));
  return gameArr.map((item) => [arrToGame(item[0].split(',')), item[1]]);
};

export default function useGameQuery() {
  const { feed, isFeedLoading, isFeedError } = useFeedQuery();

  return {
    game: filterGame(feed),
    isGameLoading: isFeedLoading,
    isGameError: isFeedError,
  };
}
