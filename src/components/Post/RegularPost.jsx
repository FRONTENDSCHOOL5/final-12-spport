import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NoImage from '../../assets/image/noimage.png';

// +
// 슬라이더 라이브러리 변경함
// npm install @splidejs/react-splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const RegularPostStyle = styled.div`
  width: calc(100% - 10px);
  p {
    line-height: 18px;
    margin-bottom: 16px;
    width: calc(100% - 10px);
    word-break: break-all;
  }

  img {
    width: calc(100% - 10px);
    background-color: #fff;
    aspect-ratio: 304/228;
    object-fit: cover;
    border: 0.5px solid var(--color-lightgrey);
    border-radius: 10px;
  }

  .splide__arrow--prev,
  .splide__arrow--next {
    background-color: #fff;
    opacity: 0.5;
    padding: 15px 5px;
    border-radius: 20px;
    color: black;
  }

  .splide__arrow--next {
    margin-right: 10px;
  }

  .splide__arrow--prev:after,
  .splide__arrow--next:after {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .splide__pagination__page {
    background: var(--color-lime);
  }
`;

export default function RegularPost({ post }) {
  const [images, setImages] = useState([]);
  const location = useLocation();

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
        {location.pathname.includes('post') ? (
          <p>{post.content}</p>
        ) : (
          <Link to={`/post/${post.id}`}>
            <p>{post.content}</p>
          </Link>
        )}

        <section className='post-img-wrapper'>
          {images.length === 1 && (
            <img src={images[0]} alt='' onError={handleImgError} />
          )}

          {images.length > 1 && (
            <Splide>
              {images.map((image, index) => {
                return (
                  <SplideSlide key={index}>
                    <img
                      key={image}
                      src={image}
                      alt=''
                      onError={handleImgError}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          )}
        </section>
      </RegularPostStyle>
    </>
  );
}
