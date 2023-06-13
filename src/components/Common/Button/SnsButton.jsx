import React from 'react';
import styled from 'styled-components';
import facebook from '../../../assets/image/icon-facebook.svg';
import kakao from '../../../assets/image/icon-kakao.svg';
import google from '../../../assets/image/icon-google.svg';

const SnsButtonStyle = styled.button`
  border-radius: 50px;
  background-color: var(--color-navy);
  width: 80%;
  padding: 13px 0;
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    display: inline-block;
    left: 30px;
  }
`;

const KakaoButtonStyle = styled(SnsButtonStyle)`
  color: #f2c94c;
  border: 1px solid #f2c94c;
  &:before {
    background: url(${kakao}) no-repeat;
  }
`;

function KakaoButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <KakaoButtonStyle onClick={console.log('로그인')}>
      카카오톡 계정으로 로그인
    </KakaoButtonStyle>
  );
}

const GoogleButtonStyle = styled(SnsButtonStyle)`
  color: #fff;
  border: 1px solid #fff;

  &:before {
    background: url(${google}) no-repeat center / 98%;
  }
`;

function GoogleButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <GoogleButtonStyle onClick={console.log('로그인')}>
      구글 계정으로 로그인
    </GoogleButtonStyle>
  );
}

const FacebookButtonStyle = styled(SnsButtonStyle)`
  color: #2d9cdb;
  border: 1px solid #2d9cdb;

  &:before {
    background: url(${facebook}) no-repeat;
  }
`;

function FacebookButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <FacebookButtonStyle onClick={console.log('로그인')}>
      페이스북 계정으로 로그인
    </FacebookButtonStyle>
  );
}

export { KakaoButton, GoogleButton, FacebookButton };
