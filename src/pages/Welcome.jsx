import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoLime from '../assets/logo/logo-lime.svg';

import {
  KakaoButton,
  GoogleButton,
  FacebookButton,
} from '../components/Common/Button/SnsButton';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <WelcomeWrap>
      <ImageLogoDiv>
        <ImageLogo src={logoLime} alt='로고' />
      </ImageLogoDiv>
      <LoginMethodDiv>
        <UlLogin>
          <li>
            <KakaoButton />
          </li>
          <li>
            <GoogleButton />
          </li>
          <li>
            <FacebookButton />
          </li>
          <LinkWrap>
            <Link to='/login'>이메일 로그인</Link>
            <p>|</p>
            <Link to='/signup'>회원가입</Link>
          </LinkWrap>
        </UlLogin>
      </LoginMethodDiv>
    </WelcomeWrap>
  );
}

export const ImageLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageLogo = styled.img`
  max-width: 390px;
`;

const WelcomeWrap = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  background-color: var(--color-navy);
  height: 100vh;
  width: 100%;
`;

const UlLogin = styled.div`
  gap: 10px;
  list-style: none;

  li {
    min-width: 322px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity:0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const LoginMethodDiv = styled.div`
  background-color: var(--color-lime);
  border-radius: 20px 20px 0 0;
  padding: 50px 0;
  height: 100%;
  animation: ${slideUp} 0.7s ease-in-out;
`;

export const LinkWrap = styled.div`
  color: var(--color-steelblue);
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
  font-size: 12px;
  a {
    text-decoration: none;
  }
`;
