import React from 'react';
import styled from 'styled-components';
import weatherIcon from '../../assets/image/default-profile.png';

const RegularPostStyle = styled.div`
  p {
    line-height: 18px;
    margin-bottom: 16px;
  }
  img {
    width: 100%;
    aspect-ratio: 304/228;
    object-fit: cover;
    border: 0.5px solid var(--color-steelblue);
    border-radius: 10px;
  }
`;

// post = {
//   id: String,
//   content: String,
//   image: String,
//   createdAt: String,
//   updatedAt: String,
//   hearted: false,
//   heartCount: 0,
//   commentCount: 0,
//   author: {
//     _id: '작성자 id',
//     username: '2',
//     accountname: '2',
//     following: [],
//     follower: ['follower id'],
//     followerCount: 1,
//     followingCount: 0,
//   },
// };

export default function RegularPost({ post }) {
  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <p>{post.content}</p>
        {post.image && <img src={weatherIcon} alt='' />}
      </RegularPostStyle>
    </>
  );
}
