import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { getWeather, getWeatherPosted } from '../../api/WeatherAPI';
import { arrToGame } from '../../util/gameUtil';

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

const NoWeatherStyle = styled.p`
  background: var(--color-navy);
  border-radius: 10px;
  font-size: 14px;
  color: var(--color-lime);
  margin: auto;
  border-radius: 10px;
  padding: 20px 0;
  width: calc(100% - 10px);
  text-align: center;
`;

export default function GamePost({ post }) {
  const game = arrToGame(post.content.split(','));
  const isHome = post.author.username.startsWith(game.home);
  const [weather, setWeather] = useState({});
  const [isFuture, setIsFuture] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getCurrentWeather = async () => {
      const weatherData = await getWeather(game.en_city, post);
      setWeather(weatherData);
    };
    const getPastWeather = async () => {
      const weatherData = await getWeatherPosted(
        post.image,
        game.en_city,
        post,
      );
      setWeather(weatherData);
    };

    const today = new Date().setHours(0, 0, 0, 0);
    const date = new Date(game.date).setHours(0, 0, 0, 0);
    if (today < date) {
      setIsFuture(true);
    } else if (post.image.split(',').length < 6) {
      getCurrentWeather();
    } else {
      getPastWeather();
    }
  }, []);

  return (
    <>
      {location.pathname.includes('post') ? (
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
          {Object.keys(weather).length > 0 && !isFuture && (
            <WeatherCard city={game.stadium} weather={weather} />
          )}
          {isFuture && (
            <NoWeatherStyle>--- 날씨 업데이트 예정 ---</NoWeatherStyle>
          )}
        </>
      ) : (
        <Link to={`/post/${post.id}`}>
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
          {Object.keys(weather).length > 0 && !isFuture && (
            <WeatherCard city={game.stadium} weather={weather} />
          )}
          {isFuture && (
            <NoWeatherStyle>--- 날씨 업데이트 예정 ---</NoWeatherStyle>
          )}
        </Link>
      )}
    </>
  );
}
