const getWeatherAPI = async (city) => {
  const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  try {
    const response = await fetch(reqUrl);
    if (!response.ok) {
      throw new Error('failed to retrieve boardgame.json');
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getWeather = async (city) => {
  const roundSecondDecimal = (num) => {
    return Math.round(100 * num) / 100;
  };
  const data = await getWeatherAPI(city);
  return {
    'avg_temp': roundSecondDecimal(data.main.temp - 270),
    'max_temp': roundSecondDecimal(data.main.temp_max - 270),
    'min_temp': roundSecondDecimal(data.main.temp_min - 270),
    'humidity': data.main.humidity,
    'description': data.weather[0].description,
    'image': `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
  };
};

export { getWeather };
