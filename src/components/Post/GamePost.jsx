import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import styled from 'styled-components';
import { getWeather, getWeatherPosted } from '../../api/WeatherAPI';
import { arrToGame } from '../../api/GameAPI/AddGameAPI';

const GamePostStyle = styled.article`
  p {
    line-height: 18px;
    margin-bottom: 16px;
    text-align: center;
    span {
      display: inline-block;
      margin: 20px 0;
      box-shadow: inset 0 -10px var(--color-lime);
    }
    strong {
      font-size: 20px;
      font-weight: bold;
      padding: 5px;
    }
  }
`;

export default function GamePost({ post }) {
  const game = arrToGame(post.content.split(','));
  const isHome = post.author.username.startsWith(game.home);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getCurrentWeather = async () => {
      const weatherData = await getWeather(game.en_city, post);
      setWeather(weatherData);
    };
    const getPastWeather = async () => {
      const weatherData = await getWeatherPosted(post.image);
      setWeather(weatherData);
    };
    const today = new Date().setHours(0, 0, 0, 0);
    const date = new Date(game.date).setHours(0, 0, 0, 0);
    if (today === date) {
      getCurrentWeather();
    } else {
      getPastWeather();
    }
  }, []);
  return (
    <>
      <GamePostStyle className='content-article'>
        <p>
          {isHome
            ? `오늘 ${game.home}의 홈 게임이 있습니다.`
            : `오늘 ${game.away}의 어웨이 게임이 있습니다.`}
          <br />
          {game.date} ({game.day}) {game.time} <br />
          <span>
            <strong>{game.home}</strong> vs. <strong>{game.away}</strong>
          </span>{' '}
          <br />
          in {game.full_stadium}
        </p>
      </GamePostStyle>
      {Object.keys(weather).length > 0 && (
        <WeatherCard city={game.stadium} weather={weather} />
      )}
    </>
  );
}
