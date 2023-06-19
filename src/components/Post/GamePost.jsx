import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import styled from 'styled-components';
import { getWeather } from '../../api/WeatherAPI';

const GamePostStyle = styled.div`
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

const weather = {
  city: '대구',
  avg_temp: '30',
  min_temp: '25',
  max_temp: '35',
  humidity: '44',
  description: 'light rain',
  icon: '10d',
};

// const game = {
//   date: '06.01',
//   day: '목',
//   time: '18:30',
//   home: 'LG',
//   away: '롯데',
//   stadium: '잠실',
//   full_stadium: '서울종합운동장 야구장',
// };

export default function GamePost({ post, game }) {
  const isHome = post.author.username.startsWith(game.home);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getWeather(game.en_city);
      setWeather(data);
    };
    getData();
  }, []);
  return (
    <>
      <GamePostStyle className='content-wrapper'>
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
      <WeatherCard city={game.stadium} weather={weather} />
    </>
  );
}
