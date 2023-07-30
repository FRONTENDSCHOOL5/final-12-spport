import { GET_API, POST_API } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useCommentQuery(token, postId) {
  const getComment = async () => {
    return await GET_API(token, `/post/${postId}/comments?limit=100`);
  };

  const commentQuery = useQuery({
    queryKey: ['comment'],
    queryFn: () => getComment(),
  });

  return [commentQuery.data, commentQuery.isLoading, commentQuery.isError];
}

function useAddCommentMutation(token, postId) {
  const queryClient = useQueryClient();
  const addComment = async (content) => {
    const bodyData = {
      'comment': {
        'content': content,
      },
    };
    return await POST_API(token, `/post/${postId}/comments`, bodyData);
  };

  return useMutation((content) => addComment(content), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comment'],
        refetchType: 'active',
      });
    },
  });
}

export { useCommentQuery, useAddCommentMutation };
