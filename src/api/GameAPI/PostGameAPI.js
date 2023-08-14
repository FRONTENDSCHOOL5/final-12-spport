import { POST_API, PUT_API } from '../CommonAPI';

const postAPI = async (token, content, image = '') => {
  const postData = {
    'post': {
      'content': content,
      'image': image,
    },
  };
  POST_API(token, '/post', postData);
};

const editGamePostAPI = async (token, id, content, weather) => {
  const reqUrl = `/post/${id}`;
  const image = weather.join(',');
  const bodyData = {
    'post': {
      'content': content,
      'image': image,
    },
  };
  const data = await PUT_API(token, reqUrl, bodyData);
  return data;
};

export { editGamePostAPI };
