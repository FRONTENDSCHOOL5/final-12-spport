import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardStyle = styled.li`
  flex-basis: 140px;
  flex-shrink: 0;
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

export default function CardListItem({ game }) {
  const game_info = game[0];
  const game_id = game[1];
  const linkPost = `/post/${game_id[0]}`;
  return (
    <CardStyle key={game_id[0]}>
      <Link to={linkPost}>
        <img className='img-card' src={game_info.image} alt='' />
        <p className='card-title'>
          {game_info.home} vs. {game_info.away}
        </p>
        <p className='card-info'>
          {game_info.date.slice(5)} ({game_info.day}) in {game_info.stadium}
        </p>
      </Link>
    </CardStyle>
  );
}
