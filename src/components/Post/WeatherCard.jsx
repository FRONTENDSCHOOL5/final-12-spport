import React from 'react';
import styled from 'styled-components';
import weatherIcon from './testweather.png';
import iconTemp from '../../assets/image/icon-temp.svg';
import iconWater from '../../assets/image/icon-water.svg';
const WeatherCardStyle = styled.div`
  border: 1px solid var(--color-navy);
  border-radius: 10px;
  padding: 7px 30px 17px;
  width: 304px;
  text-align: start;
  .weather-title {
    width: 178px;
    text-align: center;
    padding: 3px 0;
    background: var(--color-navy);
    border-radius: 50px;
    font-size: 14px;
    color: var(--color-lime);
    margin: auto;
  }
  .weather-info {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    * {
      color: var(--color-navy);
    }
    .weather-desc {
      text-align: center;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      img {
        width: 112px;
      }
    }
    .weather-measurement {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      .avg-temp {
        font-size: 20px;
        font-weight: bold;
      }
      .avg-temp:before {
        content: url(${iconTemp});
        display: inline-block;
        padding: 0 3px;
      }
      .min-max {
        font-size: 10px;
        padding-left: 18px;
      }
      .humidity {
        padding-top: 10px;
        font-size: 20px;
        font-weight: bold;
      }
      .humidity:before {
        content: url(${iconWater});
        display: inline-block;
        padding: 0 3px;
      }
    }
  }
`;

export default function WeatherCard({ weather }) {
  return (
    <WeatherCardStyle className='weather-wrapper'>
      <h3 className='weather-title'>오늘 {weather.city} 날씨</h3>
      <div className='weather-info'>
        <div className='weather-desc'>
          <img src={weatherIcon} alt='날씨 이미지' />
          <span>{weather.description}</span>
        </div>
        <div className='weather-measurement'>
          <span className='avg-temp'>{weather.avg_temp}°C</span>
          <span className='min-max'>
            최저 {weather.min_temp}°C 최고 {weather.max_temp}°C
          </span>
          <span className='humidity'>{weather.humidity}%</span>
        </div>
      </div>
    </WeatherCardStyle>
  );
}
