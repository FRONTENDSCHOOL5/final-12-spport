const getDateTime = (post) => {
  if (post.author.accountname.startsWith('SPORT_')) {
    const info = post.content.split(',');
    return [new Date(info[0]), '9:00'];
  }
  return [new Date(post.createdAt.slice(0, 10)), post.createdAt.slice(11, -8)];
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

export { sortFeedPost };
