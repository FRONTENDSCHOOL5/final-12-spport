import { DELETE_API, POST_API_NO_BODY } from '../CommonAPI';

const deleteCommentAPI = async (token, post_id, comment_id) => {
  const data = DELETE_API(token, `/post/${post_id}/comments/${comment_id}`);
  return data;
};

const reportCommentAPI = async (token, post_id, comment_id) => {
  const data = POST_API_NO_BODY(
    token,
    `/post/${post_id}/comments/${comment_id}/report`,
  );
  return data;
};

export { deleteCommentAPI, reportCommentAPI };
