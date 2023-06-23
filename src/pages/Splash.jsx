import React, { useState, useEffect } from 'react';
import fullLogo from '../assets/logo/full-logo.svg';
import { ImageLogoDiv } from '../pages/Welcome';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeCompleted, setFadeCompleted] = useState(false); // 페이드 아웃 완료 상태
  const navigate = useNavigate();

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
      navigate('/welcome');
    }
  }, [showSplash, navigate]);
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
    width: 390px;
  }
`;
