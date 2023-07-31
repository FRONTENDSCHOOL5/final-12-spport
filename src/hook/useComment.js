import {
  GET_API,
  POST_API,
  DELETE_API,
  POST_API_NO_BODY,
} from '../api/CommonAPI';
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

function useDeleteCommentMutation(token, postId, commentId) {
  const queryClient = useQueryClient();
  const deleteComment = async () => {
    return await DELETE_API(token, `/post/${postId}/comments/${commentId}`);
  };

  return useMutation(() => deleteComment(), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comment'],
        refetchType: 'active',
      });
    },
  });
}

function useReportCommentMutation(token, postId, commentId) {
  const reportComment = async () => {
    return await POST_API_NO_BODY(
      token,
      `/post/${postId}/comments/${commentId}/report`,
    );
  };

  return useMutation(() => reportComment());
}

export {
  useCommentQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useReportCommentMutation,
};
