const url = 'https://api.mandarin.weniv.co.kr';

/**
 * token = 사용자 token
 * reqUrl = '/post/:post_id'
 * bodyData = body에 들어갈 객체
 * */

/* ---------------------------- GENERAL API */
const API_NO_BODY = async (method, token, reqUrl) => {
  const res = await fetch(url + reqUrl, {
    method: method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

const API_BODY = async (method, token, reqUrl, bodyData) => {
  const res = await fetch(url + reqUrl, {
    method: method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const json = await res.json();
  return json;
};

/* ---------------------------- GET API */
const GET_API = async (token, reqUrl) => {
  return await API_NO_BODY('GET', token, reqUrl);
};

/* ---------------------------- POST API */
const POST_API = async (token, reqUrl, bodyData) => {
  return await API_BODY('POST', token, reqUrl, bodyData);
};

const POST_API_NO_BODY = async (token, reqUrl) => {
  return await API_NO_BODY('POST', token, reqUrl);
};

const POST_API_NO_TOKEN = async (reqUrl, bodyData) => {
  const res = await fetch(url + reqUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const json = await res.json();
  return json;
};

// isMultiple = false (이미지 한 개) = true (두 개 이상)
const POST_IMAGE_API = async (bodyData, isMultiple = false) => {
  const reqUrl =
    url + (isMultiple ? '/image/uploadfiles' : '/image/uploadfile');
  const res = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'multipart/form-data',
    },
    body: JSON.stringify(bodyData),
  });
  const json = await res.json();
  return json;
};

/* ---------------------------- PUT API */
const PUT_API = async (token, reqUrl, bodyData) => {
  return await API_BODY('PUT', token, reqUrl, bodyData);
};

/* ---------------------------- DELETE API */
const DELETE_API = async (token, reqUrl) => {
  return await API_NO_BODY('DELETE', token, reqUrl);
};

export {
  GET_API,
  POST_API,
  POST_API_NO_BODY,
  POST_API_NO_TOKEN,
  POST_IMAGE_API,
  PUT_API,
  DELETE_API,
};
