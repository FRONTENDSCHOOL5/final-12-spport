import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logoLime from '../assets/logo/logo-lime.svg';
import fullLogo from '../assets/logo/full-logo.svg';
import {
  KakaoButton,
  GoogleButton,
  FacebookButton,
} from '../components/Common/Button/SnsButton';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeCompleted, setFadeCompleted] = useState(false); // 페이드 아웃 완료 상태

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!showSplash) {
      // showSplash가 false로 변경되었을 때 페이드 아웃 완료 처리
      setFadeCompleted(true);
    }
  }, [showSplash]);

  if (!showSplash) {
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

  return (
    <FadeOutWrapper onAnimationEnd={() => setShowSplash(false)}>
      {!fadeCompleted && (
        <div>
          <h1 className='a11y-hidden'>SPPORT 로딩 화면</h1>
          <ImageLogoDiv>
            <img src={fullLogo} alt='로고' />
          </ImageLogoDiv>
        </div>
      )}
    </FadeOutWrapper>
  );
}

const ImageLogoDiv = styled.div`
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
  width: 100vw;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FadeOutWrapper = styled.div`
  animation: ${fadeOut} 1s ease-in-out;

  div {
    background-color: var(--color-lime);
    height: 100vh;
    width: 100vw;
  }
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

const LoginMethodDiv = styled.div`
  background-color: var(--color-lime);
  border-radius: 20px 20px 0 0;
  padding: 50px 0;
  height: 100%;
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
