import { DELETE_API, GET_API, POST_API_NO_BODY } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useFeedQuery(token) {
  const getFeed = async () => {
    return await GET_API(token, '/post/feed/?limit=Number?skip=Number');
  };

  const feedQuery = useQuery({
    queryKey: ['feed'],
    queryFn: () => getFeed(),
  });

  return [feedQuery.data, feedQuery.isLoading, feedQuery.isError];
}

function usePostQuery(token, post_id) {
  const getPostDetail = async () => {
    return await GET_API(token, `/post/${post_id}`);
  };

  const postQuery = useQuery({
    queryKey: ['postdetail'],
    queryFn: () => getPostDetail(),
  });
  return [postQuery.data, postQuery.isLoading, postQuery.isError];
}

function useDeletePostMutation(token, post_id) {
  const queryClient = useQueryClient();
  const deletePost = async () => {
    return await DELETE_API(token, `/post/${post_id}`);
  };
  return useMutation(() => deletePost(), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['postDetail'],
        refetchType: 'active',
      });
    },
  });
}

function useReportPostMutation(token, post_id) {
  const reportPost = async () => {
    return await POST_API_NO_BODY(token, `/post/${post_id}/report`);
  };

  return useMutation(() => reportPost());
}

export {
  useFeedQuery,
  usePostQuery,
  useDeletePostMutation,
  useReportPostMutation,
};
