import tokenData from '../assets/data/sport_users.json';

/* get game util */
const getHomeImage = (team_name) => {
  const team = tokenData.filter(
    (item) => getTeamName(item.username, item.accountname) === team_name,
  );
  return team[0].image;
};

const getTeamName = (team_name, accountname) => {
  if (team_name === '수원 FC') {
    return '수원FC';
  } else if (team_name === 'FC 서울') {
    return '서울';
  } else if (accountname.startsWith('SPORT_VB')) {
    return team_name.split(' ')[1];
  }
  return team_name.split(' ')[0];
};

const getTeamNameList = (type) => {
  const team = [];
  tokenData.forEach((item) => {
    if (type === '전체') {
      team.push(getTeamName(item.username, item.accountname));
    } else if (type === '야구' && item.accountname.startsWith('SPORT_BS')) {
      team.push(getTeamName(item.username, item.accountname));
    } else if (type === '축구' && item.accountname.startsWith('SPORT_SC')) {
      team.push(getTeamName(item.username, item.accountname));
    } else if (type === '배구' && item.accountname.startsWith('SPORT_VB')) {
      team.push(getTeamName(item.username, item.accountname));
    }
  });
  team.unshift('전체');
  return team;
};

const getDateTime = (post) => {
  if (post.author.accountname.startsWith('SPORT_')) {
    const info = post.content.split(',');
    return [new Date(info[0]), '9:00'];
  }
  return [new Date(post.createdAt.slice(0, 10)), post.createdAt.slice(11, -8)];
};

// Conver Arr to Game Object
const arrToGame = (gameArr) => {
  const image = getHomeImage(gameArr[3]);
  let type = '야구';
  if (gameArr[8] === 'SC') {
    type = '축구';
  } else if (gameArr[8] === 'VB') {
    type = '배구';
  }
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
    'type': type,
  };
};

// filter by type and team
const filterGameInfo = (game, type, team) => {
  if (type === '전체' && team === '전체') {
    return game;
  } else if (type === '전체') {
    return game.filter(
      (item) => item[0].home === team || item[0].away === team,
    );
  } else if (team === '전체') {
    return game.filter((item) => item[0].type === type);
  } else {
    return game.filter(
      (item) =>
        (item[0].home === team || item[0].away === team) &&
        item[0].type === type,
    );
  }
};

const sortFeedPost = (posts, onlyGame) => {
  // 오늘
  const game = posts.filter((item) => {
    if (item.author.accountname.startsWith('SPORT_')) {
      const today = new Date();
      const date = new Date(item.content.split(',')[0]);
      if (today >= date) {
        return true;
      }
    } else {
      return onlyGame ? false : true;
    }
  });

  return game.sort((a, b) => {
    const [dateA, timeA] = getDateTime(a);
    const [dateB, timeB] = getDateTime(b);
    if (dateA > dateB) {
      return -2;
    } else if (dateA < dateB) {
      return 1;
    } else {
      if (timeA < timeB) {
        return -2;
      } else {
        return 1;
      }
    }
  });
};

// date / time 오름차순 정렬
const sortGameByDate = (gameArr, addGame = true) => {
  return gameArr.sort((a, b) => {
    let infoA = a[0]?.split(',');
    let infoB = b[0]?.split(',');
    if (!addGame) {
      infoA = a.content.split(',');
      infoB = b.content.split(',');
    }
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

export {
  arrToGame,
  getTeamName,
  getTeamNameList,
  getHomeImage,
  filterGameInfo,
  sortFeedPost,
  sortGameByDate,
};
