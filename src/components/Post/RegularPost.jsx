import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoImage from '../../assets/image/noimage.png';

const RegularPostStyle = styled.div`
  p {
    line-height: 18px;
    margin-bottom: 16px;
    width: calc(100% - 10px);
    word-break: break-all;
  }
  .post-img-wrapper {
    box-shadow: inset 0 0 10px red;
    display: flex;
    gap: 20px;
    overflow: scroll;
  }

  img {
    width: calc(100% - 10px);
    aspect-ratio: 304/228;
    object-fit: cover;
    border: 0.5px solid var(--color-steelblue);
    border-radius: 10px;
  }
`;

export default function RegularPost({ post }) {
  const [images, setImages] = useState([]);
  if (post.image) {
    const imageUrl = post.image.split(',');
    useEffect(() => {
      setImages(imageUrl);
    }, []);
  }

  const handleImgError = (e) => {
    e.target.src = NoImage;
  };

  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <p>{post.content}</p>
        <section className='post-img-wrapper'>
          {images &&
            images.map((image) => {
              return (
                <img key={image} src={image} alt='' onError={handleImgError} />
              );
            })}
        </section>
      </RegularPostStyle>
    </>
  );
}
