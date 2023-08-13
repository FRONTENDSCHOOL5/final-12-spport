import {
  GET_API,
  POST_API,
  DELETE_API,
  POST_API_NO_BODY,
} from '../api/CommonAPI';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function useCommentQuery(token, post_id) {
  const getComment = async () => {
    return await GET_API(token, `/post/${post_id}/comments?limit=100`);
  };

  const commentQuery = useQuery({
    queryKey: ['comment'],
    queryFn: () => getComment(),
  });

  return [commentQuery.data, commentQuery.isLoading, commentQuery.isError];
}

function useAddCommentMutation(token, post_id) {
  const queryClient = useQueryClient();
  const addComment = async (content) => {
    const bodyData = {
      'comment': {
        'content': content,
      },
    };
    return await POST_API(token, `/post/${post_id}/comments`, bodyData);
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

function useDeleteCommentMutation(token, post_id, comment_id) {
  const queryClient = useQueryClient();
  const deleteComment = async () => {
    return await DELETE_API(token, `/post/${post_id}/comments/${comment_id}`);
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

function useReportCommentMutation(token, post_id, comment_id) {
  const reportComment = async () => {
    return await POST_API_NO_BODY(
      token,
      `/post/${post_id}/comments/${comment_id}/report`,
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
