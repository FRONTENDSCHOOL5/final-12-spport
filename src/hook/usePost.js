import { DELETE_API, GET_API, POST_API } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useFeedQuery() {
  const getFeed = async () => {
    return await GET_API('/post/feed/?limit=Number?skip=Number');
  };

  const feedQuery = useQuery({
    queryKey: ['feed'],
    queryFn: () => getFeed(),
  });

  return {
    feed: feedQuery.data,
    isFeedLoading: feedQuery.isLoading,
    isFeedError: feedQuery.isError,
  };
}

function usePostQuery(post_id) {
  const getPostDetail = async () => {
    return await GET_API(`/post/${post_id}`);
  };

  const postQuery = useQuery({
    queryKey: ['postDetail'],
    queryFn: () => getPostDetail(),
  });
  return [
    postQuery.data,
    postQuery.isLoading,
    postQuery.isError,
    postQuery.refetch,
  ];
}

function useDeletePostMutation(post_id) {
  const queryClient = useQueryClient();
  const deletePost = async () => {
    return await DELETE_API(`/post/${post_id}`);
  };
  return useMutation(() => deletePost(), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userPost'],
        refetchType: 'active',
      });
    },
  });
}

function useReportPostMutation(post_id) {
  const reportPost = async () => {
    return await POST_API(`/post/${post_id}/report`);
  };

  return useMutation(() => reportPost());
}

export {
  useFeedQuery,
  usePostQuery,
  useDeletePostMutation,
  useReportPostMutation,
};
