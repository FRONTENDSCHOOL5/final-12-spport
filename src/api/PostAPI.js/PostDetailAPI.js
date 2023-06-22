import { PUT_API, DELETE_API } from '../CommonAPI';

const editPostAPI = (token, content, image) => {};

const deletePostAPI = async (token, post_id) => {
  const data = await DELETE_API(token, `/post/${post_id}`);
  return data;
};

const reportPostAPI = async (token, post_id) => {};

export { editPostAPI, deletePostAPI, reportPostAPI };
