import { GET_API } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// const getPostDetailAPI = async () => {

// }

// const deletePostAPI = async () => {

// }

// const reportPostAPI = async () => {

// }

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

function usePostQuery(token, postId) {
  const getPostDetail = async () => {
    return await GET_API(token, `/post/${postId}`);
  };

  const postQuery = useQuery({
    queryKey: ['postdetail'],
    queryFn: () => getPostDetail(),
  });
  return [postQuery.data, postQuery.isLoading, postQuery.isError];
}

function useDeletePostMutation() {}

function useReportPostMutation() {}

export { useFeedQuery, usePostQuery };
