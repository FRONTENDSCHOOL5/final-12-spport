import { getTeamToken } from '../util/gameUtil';
import { PUT_API } from './CommonAPI';

const getWeatherAPI = async (city) => {
  const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  try {
    const response = await fetch(reqUrl);
    if (!response.ok) {
      throw new Error('failed to retrieve weather API');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
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

const storeWeather = async (team_name, post, data) => {
  const roundSecondDecimal = (num) => {
    return Math.round(100 * num) / 100;
  };
  const token = getTeamToken(team_name);
  const weather = [
    roundSecondDecimal(data.main.temp - 270),
    roundSecondDecimal(data.main.temp_max - 270),
    roundSecondDecimal(data.main.temp_min - 270),
    data.main.humidity,
    data.weather[0].description,
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
  ];
  const store = await editGamePostAPI(token, post.id, post.content, weather);
  return weather;
};

const getWeather = async (city, post) => {
  const data = await getWeatherAPI(city);
  const weather = await storeWeather(post.author.accountname, post, data);
  return {
    'avg_temp': weather[0],
    'max_temp': weather[1],
    'min_temp': weather[2],
    'humidity': weather[3],
    'description': weather[4],
    'image': weather[5],
  };
};

const getWeatherPosted = async (weather, city, post) => {
  const weatherArr = weather.split(',');
  if (weatherArr.length < 6) {
    return await getWeather(city, post);
  }
  return {
    'avg_temp': weatherArr[0],
    'max_temp': weatherArr[1],
    'min_temp': weatherArr[2],
    'humidity': weatherArr[3],
    'description': weatherArr[4],
    'image': weatherArr[5],
  };
};

export { getWeather, getWeatherPosted };
