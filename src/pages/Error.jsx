import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import logo404 from '../assets/logo/logo-404.svg';
import MButton from '../components/Common/Button/MButton';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ErrorStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30%;
  position: absolute;
  width: 100%;
  height: 100%;
  gap: 20px;

  h1 {
    font-size: 14px;
    color: var(--color-maingrey);
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export default function Error({ isLogin }) {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const error_code = location.state?.error_code;
  useLayoutEffect(() => {
    navigate('/error');
  }, []);

  const logout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <ErrorStyle>
      <img src={logo404} alt='에러 404' />
      <h1>
        {error_code === 'ERR_NETWORK'
          ? '서버 접속에 문제가 생겼습니다.'
          : '페이지를 찾을 수 없습니다.'}
      </h1>
      <div>
        {isLogin ? (
          <>
            <MButton text='메인 페이지' func={() => navigate('/home')} />
            <MButton text='로그아웃' func={() => logout()} />
          </>
        ) : (
          <MButton text='로그인 페이지' func={() => navigate('/welcome')} />
        )}
      </div>
    </ErrorStyle>
  );
}
