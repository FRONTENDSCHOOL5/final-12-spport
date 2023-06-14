import React from 'react';
import styled from 'styled-components';
import { ProfileImage50 } from '../Common/ProfileImage';
import SButton from '../Common/Button/SButton';

const ListItemStyle = styled.div`
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

//   author: {
//     _id: '작성자 id',
//     username: '2',
//     accountname: '2',
//     following: [],
//     follower: ['follower id'],
//     followerCount: 1,
//     followingCount: 0,
//   },

// user-search <ListItem user={user} />
// team-search <ListItem user={user} />
// user-follow <ListItem user={user} onFollowClick={} follow/>
// team-follow <ListItem user={user} onFollowClick={} follow/>

// const game = {
//     date: '06.01',
//     day: '목',
//     time: '18:30',
//     home: 'LG',
//     away: '롯데',
//     stadium: '잠실',
//     full_stadium: '서울종합운동장 야구장',
//   };

export default function GameListItem({ game }) {
  return (
    <ListItemStyle className='ListItem-wrapper'>
      {/* TODO author의 프로필을 검색 후 이미지 추가 */}
      <ProfileImage50 />
      <div>
        <span className='teams'>
          {game.home} vs. {game.away}
        </span>
        <br />
        <span className='game-info'>
          {game.date}({game.day}) {game.time} in {game.stadium}
        </span>
      </div>
      <SButton text='추가' />
    </ListItemStyle>
  );
}
