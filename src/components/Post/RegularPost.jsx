import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// npm i swiper 필요
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

const RegularPostStyle = styled.div`
  p {
    line-height: 18px;
    margin-bottom: 16px;
    width: calc(100% - 10px);
    word-break: break-all;
  }
  .post-img-wrapper {
  }

  img {
    width: calc(100% - 10px);
    background-color: #fff;
    aspect-ratio: 304/228;
    object-fit: contain;
    border: 0.5px solid var(--color-steelblue);
    border-radius: 10px;
  }

  /* .swiper-slide { */
  /* 추가 */
  /* position: relative; */
  /* } */

  /* .swiper-slide img { */
  /* 추가 */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* } */
`;

export default function RegularPost({ post }) {
  const [images, setImages] = useState([]);
  if (post.image) {
    const imageUrl = post.image.split(',');
    useEffect(() => {
      setImages(imageUrl);
    }, []);
  }

  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <p>{post.content}</p>
        <section className='post-img-wrapper'>
          <Swiper
            effect={'fade'}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, EffectFade, Pagination]}
            className='mySwiper'
            loop={true}
          >
            {images &&
              images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <img key={image} src={image} alt='' />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </section>
      </RegularPostStyle>
    </>
  );
}
