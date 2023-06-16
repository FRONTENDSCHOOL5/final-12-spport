import { GET_API } from '../CommonAPI';
import { arrToGame } from './AddGameAPI';
import tokenData from '../../data/sport_bs_users.json';

const getTeamToken = (team_name) => {
  const team = tokenData.filter(
    (item) => item.accountname.split(' ')[0] === team_name,
  );
  return team[0].token;
};

const getGameInfoByTeam = async (team_name) => {
  const token = getTeamToken(team_name);
  const posts = await GET_API(token, `/post/${team_name}/userpost?limit=100`);

  const game = posts.post.filter((item) => {
    if (item.author.accountname.startsWith('SPORT_')) {
      const today = new Date();
      const date = new Date(item.image);
      if (today < date) {
        return true;
      }
    }
  });

  // date / time 오름차순 정렬
  game.sort((a, b) => {
    const infoA = a.content.split(',');
    const infoB = b.content.split(',');
    const dateA = new Date(a.image);
    const dateB = new Date(b.image);
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
  return game.map((item) => [arrToGame(item.content.split(',')), [item.id]]);
};

export { getGameInfoByTeam };
