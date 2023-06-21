import { GET_API, POST_API, DELETE_API } from '../CommonAPI';

const writeCommentAPI = async (token, post_id, content) => {
  const bodyData = {
    'comment': {
      'content': content,
    },
  };
  const data = await POST_API(token, `/post/${post_id}/comments`, bodyData);
  return data;
};

const getCommentAPI = async (token, post_id) => {
  const data = await GET_API(token, `/post/${post_id}/comments`);
  return data;
};

const deleteCommentAPI = async (token, post_id, comment_id) => {
  const data = DELETE_API(token, `/post/${post_id}/comments/${comment_id}`);
  return data;
};

export { writeCommentAPI, getCommentAPI, deleteCommentAPI };
