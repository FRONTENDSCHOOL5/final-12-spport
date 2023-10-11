import { GET_API, POST_API, DELETE_API } from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useCommentQuery(post_id) {
  const getComment = async () => {
    return await GET_API(`/post/${post_id}/comments?limit=100`);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['comment', post_id],
    queryFn: () => getComment(),
  });

  return {
    comment: data,
    isCommentLoading: isLoading,
    isCommentError: isError,
  };
}

function useAddCommentMutation(post_id) {
  const queryClient = useQueryClient();
  const addComment = async (content) => {
    const bodyData = {
      'comment': {
        'content': content,
      },
    };
    return await POST_API(`/post/${post_id}/comments`, bodyData);
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

function useDeleteCommentMutation(post_id, comment_id) {
  const queryClient = useQueryClient();
  const deleteComment = async () => {
    return await DELETE_API(`/post/${post_id}/comments/${comment_id}`);
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

function useReportCommentMutation(post_id, comment_id) {
  const reportComment = async () => {
    return await POST_API(`/post/${post_id}/comments/${comment_id}/report`);
  };

  return useMutation(() => reportComment());
}

export {
  useCommentQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useReportCommentMutation,
};
