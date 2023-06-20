import React from 'react';
import BasicImage from '../../assets/image/default-profile.png';
import styled, { css } from 'styled-components';

const Common = css`
  border: 1px solid var(--color-steelblue);
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
const ProfileImg36 = styled.div`
  ${Common}
  width: 36px;
  height: 36px;
`;
const ProfileImg42 = styled.div`
  ${Common}
  width: 42px;
  height: 42px;
`;
const ProfileImg50 = styled.div`
  ${Common}
  width: 50px;
  height: 50px;
`;
const ProfileImg110 = styled.div`
  ${Common}
  width: 110px;
  height: 110px;
`;

const handleImgError = (e) => {
  e.target.src = BasicImage;
};

// 이미지 없을 시 디폴트 이미지, 있을시 props 받아오기
function ProfileImage36(props) {
  return (
    <ProfileImg36>
      <img
        onError={handleImgError}
        src={props.img || BasicImage}
        alt='프로필 이미지'
      />
    </ProfileImg36>
  );
}
function ProfileImage42(props) {
  return (
    <ProfileImg42>
      <img
        onError={handleImgError}
        src={props.img || BasicImage}
        alt='프로필 이미지'
      />
    </ProfileImg42>
  );
}
function ProfileImage50(props) {
  return (
    <ProfileImg50>
      <img
        onError={handleImgError}
        src={props.img || BasicImage}
        alt='프로필 이미지'
      />
    </ProfileImg50>
  );
}
function ProfileImage110(props) {
  return (
    <ProfileImg110>
      <img
        onError={handleImgError}
        src={props.img || BasicImage}
        alt='프로필 이미지'
      />
    </ProfileImg110>
  );
}

export { ProfileImage36, ProfileImage42, ProfileImage50, ProfileImage110 };
