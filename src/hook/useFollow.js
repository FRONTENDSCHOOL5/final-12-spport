import { GET_API, POST_API_NO_BODY, DELETE_API } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useFollowerQuery(token, accountname) {
  const getFollower = async () => {
    return await GET_API(
      token,
      `/profile/${accountname}/follower?limit=Number&skip=Number`,
    );
  };

  const followerQuery = useQuery({
    queryKey: ['follower'],
    queryFn: () => getFollower(),
  });
  return [followerQuery.data, followerQuery.isLoading, followerQuery.isError];
}

function useFollowingQuery(token, accountname) {
  const getFollowing = async () => {
    return await GET_API(
      token,
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

function useFollowMutation(token, accountname) {
  const queryClient = useQueryClient();
  const follow = async () => {
    return await POST_API_NO_BODY(token, `/profile/${accountname}/follow`);
  };
  return useMutation(() => follow(), {
    onSuccess: () => {},
  });
}

function useUnfollowMutation(token, accountname) {
  const queryClient = useQueryClient();
  const unfollow = async () => {
    return await DELETE_API(token, `/profile/${accountname}/unfollow`);
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
