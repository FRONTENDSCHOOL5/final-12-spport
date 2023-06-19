import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileImage50 } from '../Common/ProfileImage';
import SButton from '../Common/Button/SButton';
import {
  checkLikeAPI,
  likeGameAPI,
  unlikeGameAPI,
} from '../../api/GameAPI/LikeGameAPI';

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
  const [isLike, setIsLike] = useState(false);

  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const setLike = async () => {
      const like = await checkLikeAPI(test_token, game_id[0]);
      setIsLike(like);
    };
    setLike();
  }, []);
  const onLikeClick = async () => {
    console.log(game_id);
    if (isLike) {
      const unlike = await unlikeGameAPI(test_token, game_id);
      setIsLike(unlike[0].post.hearted);
    } else {
      const like = await likeGameAPI(test_token, game_id);
      setIsLike(like[0].post.hearted);

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
      {isLike ? (
        <SButton text='취소' func={onLikeClick} active />
      ) : (
        <SButton text='추가' func={onLikeClick} />
      )}
    </ListItemStyle>
  );
}
