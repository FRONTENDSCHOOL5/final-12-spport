import React from 'react';
import styled from 'styled-components';
import { ProfileImage50 } from '../Common/ProfileImage';
import SButton from '../Common/Button/SButton';

const ListItemStyle = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  .img-ListItem {
    width: 42px;
    border-radius: 50px;
    border: 0.5px solid var(--color-steelblue);
  }
  a {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .teams {
    color: var(--color-navy);
    font-size: 14px;
    display: inline-block;
    margin-bottom: 3px;
  }
  .game-info {
    color: var(--color-steelblue);
    font-size: 12px;
  }
  button {
    margin-left: auto;
  }
`;

export default function GameListItem({ game }) {
  const game_info = game[0];
  const game_id = game[1];
  return (
    <ListItemStyle className='list-item' key={game_id[0]}>
      <ProfileImage50 img={game_info.image} />
      <div>
        <span className='teams'>
          {game_info.home} vs. {game_info.away}
        </span>
        <br />
        <span className='game-info'>
          {game_info.date} ({game_info.day}) {game_info.time} in{' '}
          {game_info.stadium}
        </span>
      </div>
      <SButton text='추가' />
    </ListItemStyle>
  );
}
