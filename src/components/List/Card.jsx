import React from 'react';
import styled from 'styled-components';
import imgProfile from '../../assets/image/default-profile.png';

const CardStyle = styled.li`
  width: 140px;
  border: 1px solid black;
  list-style: none;
  .img-card {
    width: 100%;
    height: 90px;
    object-fit: cover;
    border: 0.5px solid var(--color-steelblue);
    border-radius: 8px;
  }
  .card-title {
    font-size: 14px;
    padding: 2px;
  }
  .card-info {
    font-size: 12px;
    padding: 2px;
    color: var(--color-steelblue);
  }
`;

// const game = {
//     date: '06.01',
//     day: '목',
//     time: '18:30',
//     home: 'LG',
//     away: '롯데',
//     stadium: '잠실',
//     full_stadium: '서울종합운동장 야구장',
//   };

export default function Card({ game }) {
  return (
    <CardStyle>
      <img className='img-card' src={imgProfile} />
      <p className='card-title'>
        {game.home} vs. {game.away}
      </p>
      <p className='card-info'>
        {game.date} ({game.day}) in {game.stadium}
      </p>
    </CardStyle>
  );
}
