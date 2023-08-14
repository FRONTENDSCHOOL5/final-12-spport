import { GET_API } from '../api/CommonAPI';
import { useQuery } from 'react-query';
import { sortGameByDate, arrToGame } from '../util/gameUtil';

function useProfileQuery(accountname) {
  const getProfile = async () => {
    return await GET_API(`/profile/${accountname}`);
  };

  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  });
  return [
    profileQuery.data,
    profileQuery.isLoading,
    profileQuery.isError,
    profileQuery.refetch,
  ];
}

function useUserPostQuery(accountname, length = 10) {
  const getPost = async () => {
    return await GET_API(`/post/${accountname}/userpost?limit=${length}`);
  };
  const postQuery = useQuery({
    queryKey: ['userPost'],
    queryFn: () => getPost(),
  });
  return [
    postQuery.data,
    postQuery.isLoading,
    postQuery.isError,
    postQuery.refetch,
  ];
}

function useTeamPostQuery(accountname) {
  const [data, isLoadiing, isError, refetch] = useUserPostQuery(
    accountname,
    100,
  );

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

  return [
    game.map((item) => [arrToGame(item.content.split(',')), [item.id]]),
    isLoadiing,
    isError,
    refetch,
  ];
}

export { useProfileQuery, useUserPostQuery, useTeamPostQuery };
