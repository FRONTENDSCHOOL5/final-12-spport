import React from 'react';
import styled from 'styled-components';
import imgProfile from '../../assets/image/default-profile.png';

const PostProfileStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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

export default function PostProfile({ author }) {
  return (
    <PostProfileStyle className='profile-wrapper'>
      <img className='img-profile' src={imgProfile} />
      <h2>
        <span className='username'>{author.username}</span>
        <br />
        <span className='accountid'>@ {author.accountname}</span>
      </h2>
    </PostProfileStyle>
  );
}
