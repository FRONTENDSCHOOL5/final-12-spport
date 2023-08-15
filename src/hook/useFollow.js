import { GET_API, POST_API, DELETE_API } from '../api/CommonAPI';
import { useQuery, useMutation } from 'react-query';

function useFollowerQuery(accountname) {
  const getFollower = async () => {
    return await GET_API(
      `/profile/${accountname}/follower?limit=Number&skip=Number`,
    );
  };

  const followerQuery = useQuery({
    queryKey: ['follower'],
    queryFn: () => getFollower(),
  });
  return [followerQuery.data, followerQuery.isLoading, followerQuery.isError];
}

function useFollowingQuery(accountname) {
  const getFollowing = async () => {
    return await GET_API(
      `/profile/${accountname}/following?limit=Number&skip=Number`,
    );
  };

  const followingQuery = useQuery({
    queryKey: ['following'],
    queryFn: () => getFollowing(),
  });
  return [
    followingQuery.data,
    followingQuery.isLoading,
    followingQuery.isError,
  ];
}

function useFollowMutation(accountname) {
  const follow = async () => {
    return await POST_API(`/profile/${accountname}/follow`);
  };
  return useMutation(() => follow(), {
    onSuccess: () => {},
  });
}

function useUnfollowMutation(accountname) {
  const unfollow = async () => {
    return await DELETE_API(`/profile/${accountname}/unfollow`);
  };
  return useMutation(() => unfollow(), {
    onSuccess: () => {},
  });
}

export {
  useFollowerQuery,
  useFollowingQuery,
  useFollowMutation,
  useUnfollowMutation,
};
