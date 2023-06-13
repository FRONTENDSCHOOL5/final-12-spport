import React from 'react';
import styled from 'styled-components';
import logo404 from '../assets/logo/logo-404.svg';

const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  h1 {
    font-size: 14px;
    color: var(--color-maingrey);
  }
`;

export default function Error() {
  return (
    <ErrorStyle>
      <img src={logo404} alt='에러 404' />
      <h1>페이지를 찾을 수 없습니다. :(</h1>
      {/* <Button></Button> */}
      <button>뒤로 가기</button>
    </ErrorStyle>
  );
}
