import { GET_API } from '../api/CommonAPI';
import { useQuery } from 'react-query';
import { sortGameByDate, arrToGame } from '../util/gameUtil';

function useProfileQuery(accountname) {
  const getProfile = async () => {
    return await GET_API(`/profile/${accountname}`);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['profile', accountname],
    queryFn: () => getProfile(),
  });
  return {
    profile: data,
    isProfileLoading: isLoading,
    isProfileError: isError,
  };
}

function useUserPostQuery(accountname) {
  const getPost = async () => {
    return await GET_API(`/post/${accountname}/userpost`);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userPost', accountname],
    queryFn: () => getPost(),
  });

  return {
    post: data,
    isPostLoading: isLoading,
    isPostError: isError,
  };
}

function useTeamPostQuery(accountname) {
  const getPost = async () => {
    return await GET_API(
      `/post/${accountname}/userpost?limit=Number?skip=Number`,
    );
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userPost', accountname],
    queryFn: () => getPost(),
  });

  let filteredGame;
  if (!isLoading && !isError) {
    const game = data.post.filter((item) => {
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

    sortGameByDate(game, false);
    filteredGame = game.map((item) => [
      arrToGame(item.content.split(',')),
      [item.id],
    ]);
  }

  return {
    post: filteredGame,
    isPostLoading: isLoading,
    isPostError: isError,
  };
}

export { useProfileQuery, useUserPostQuery, useTeamPostQuery };
