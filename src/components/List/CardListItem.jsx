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
  const game_info = game.itemName.split(',');
  console.log(game);
  const linkPost = `/post/${game.link.split(',')[0]}`;
  return (
    <CardStyle key={game.id}>
      <Link to={linkPost}>
        <img className='img-card' src={game.itemImage} alt='' />
        <p className='card-title'>
          {game_info[3]} vs. {game_info[4]}
        </p>
        <p className='card-info'>
          {game_info[0].slice(5)} ({game_info[1]}) in {game_info[5]}
        </p>
      </Link>
    </CardStyle>
  );
}
