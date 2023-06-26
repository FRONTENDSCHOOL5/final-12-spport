import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import NoImage from '../../assets/image/noimage.png';

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

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #fff;
    opacity: 0.5;
    padding: 15px 5px;
    border-radius: 20px;
    color: black !important;
  }

  .swiper-button-next {
    margin-right: 10px;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
  }

  /* .swiper-pagination {
    position: absolute;
    bottom: 0;
  } */
  /* .swiper-pagination-bullet {
    background: black !important;
  } */
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

  SwiperCore.use([EffectFade, Navigation, Pagination]);

  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <Link to={`/post/${post.id}`}>
          <p>{post.content}</p>
        </Link>
        <section className='post-img-wrapper'>
          {images.length === 1 && (
            <img src={images[0]} alt='' onError={handleImgError} />
          )}
          {images.length > 1 && (
            <Swiper
              // modules={[Navigation, EffectFade, Pagination]}
              className='mySwiper'
              effect={'fade'}
              spaceBetween={0}
              pagination={{
                el: '.mySwiper .swiper-pagination',
                clickable: true,
                type: 'bullets',
              }}
              observer='true'
              observeParents='true'
              loop={false}
              slidePerView={1}
              navigation
            >
              {images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <img
                      key={image}
                      src={image}
                      alt=''
                      onError={handleImgError}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </section>
      </RegularPostStyle>
    </>
  );
}
