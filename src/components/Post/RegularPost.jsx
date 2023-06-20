import React from 'react';
import styled from 'styled-components';

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

export default function RegularPost({ post }) {
  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt='' />}
      </RegularPostStyle>
    </>
  );
}
