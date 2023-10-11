import tokenData from '../assets/data/sport_users.json';
import { getTeamTokenAPI } from '../api/UpdateAPI';

const team_token = {};

const setTeamToken = async () => {
  const promiseArr = tokenData.map(async (item) => {
    const token = await getTeamTokenAPI(item.email, item.password);
    team_token[item.accountname] = token;
    return token;
  });
  await Promise.all(promiseArr);
};

const getTeamToken = (accountname) => {
  return team_token[accountname];
};

export { setTeamToken, getTeamToken };
