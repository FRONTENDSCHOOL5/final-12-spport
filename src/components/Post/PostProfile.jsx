import React from 'react';
import styled from 'styled-components';
import iconMore from '../../assets/image/icon-more-small.svg';
import { Link } from 'react-router-dom';
import { ProfileImage36 } from '../Common/ProfileImage';

const PostProfileStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% - 10px);
  a {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .img-profile {
    width: 42px;
    border-radius: 50px;
    border: 0.5px solid var(--color-steelblue);
  }
  .username {
    color: var(--color-navy);
    font-size: 14px;
  }
  .accountid {
    color: var(--color-steelblue);
    font-size: 12px;
  }
  .btn-more {
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

export default function PostProfile({ author, onMoreClick }) {
  const isTeam = author.accountname.startsWith('SPORT_');
  return (
    <PostProfileStyle className='profile-wrapper'>
      <Link to={`/profile/${author.accountname}`}>
        {/* TODO author의 프로필을 검색 후 이미지 추가 */}
        <ProfileImage36 image={author.image} />
        <div>
          <span className='username'>{author.username}</span>
          <br />
          <span className='accountid'>
            @ {isTeam ? author.accountname.slice(9) : author.accountname}
          </span>
        </div>
      </Link>
      {isTeam || (
        <button className='btn-more' type='button' onClick={onMoreClick}>
          <img src={iconMore} />
        </button>
      )}
    </PostProfileStyle>
  );
}
