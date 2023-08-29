import { GET_API, POST_API, DELETE_API } from '../api/CommonAPI';
import { useMutation, useInfiniteQuery } from 'react-query';

function useFollowerQuery(accountname) {
  const getFollower = async (pageParam) => {
    return await GET_API(
      `/profile/${accountname}/follower?limit=15&skip=${pageParam}`,
    );
  };

  const { data, fetchNextPage, isSuccess, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['follower'],
      queryFn: ({ pageParam = 0 }) => getFollower(pageParam),
      getNextPageParam: (lastPage) => {
        return lastPage.length;
      },
    });

  return {
    follower: data,
    getNextFollower: fetchNextPage,
    isFollowerLoading: isFetching,
    isFollowerSuccess: isSuccess,
    hasNextFollower: hasNextPage,
  };
}

function useFollowingQuery(accountname) {
  const getFollowing = async (pageParam) => {
    return await GET_API(
      `/profile/${accountname}/following?limit=15&skip=${pageParam}`,
    );
  };

  const { data, fetchNextPage, isSuccess, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['following'],
      queryFn: ({ pageParam = 0 }) => getFollowing(pageParam),
      getNextPageParam: (lastPage) => {
        console.log('getNextPageParam', lastPage.length);
        return lastPage.length;
      },
    });

  return {
    following: data,
    getNextFollowing: fetchNextPage,
    isFollowingLoading: isFetching,
    isFollowingSuccess: isSuccess,
    hasNextFollowing: hasNextPage,
  };
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
