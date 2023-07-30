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

function usePostQuery() {}

function useDeletePostMutation() {}

function useReportPostMutation() {}

export { useFeedQuery };
