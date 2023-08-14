import api from './index';

/* ---------------------------- GET API */
const GET_API = async (reqUrl) => {
  try {
    const response = await api.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const POST_API = async (reqUrl, bodyData = {}) => {
  try {
    const response = await api.post(reqUrl, bodyData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* ---------------------------- PUT API */
const PUT_API = async (reqUrl, bodyData) => {
  try {
    const response = await api.put(reqUrl, bodyData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* ---------------------------- DELETE API */
const DELETE_API = async (reqUrl) => {
  try {
    const response = await api.delete(reqUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { GET_API, POST_API, PUT_API, DELETE_API };
