import React from 'react';
import styled from 'styled-components';
import logo404 from '../assets/logo/logo-404.svg';
import MButton from '../components/Common/Button/MButton';
import { useNavigate } from 'react-router-dom';

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
`;

export default function Error() {
  const navigate = useNavigate();
  return (
    <ErrorStyle>
      <img src={logo404} alt='에러 404' />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <MButton text='메인 페이지' func={() => navigate('/home')} />
    </ErrorStyle>
  );
}
