import { PUT_API, DELETE_API, POST_API_NO_BODY } from '../CommonAPI';

const editPostAPI = (token, content, image) => {};

const deletePostAPI = async (token, post_id) => {
  const data = await DELETE_API(token, `/post/${post_id}`);
  return data;
};

const reportPostAPI = async (token, post_id) => {
  const data = await POST_API_NO_BODY(token, `/post/${post_id}/report`);
  return data;
};

export { editPostAPI, deletePostAPI, reportPostAPI };
