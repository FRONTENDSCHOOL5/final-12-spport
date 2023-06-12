import React from 'react';
import styled from 'styled-components';
import facebook from '../../../assets/image/icon-facebook.svg';
import iconUserFill from '../../../assets/image/icon-user-fill.svg';
import kakao from '../../../assets/image/icon-kakao.svg';
import google from '../../../assets/image/icon-google.svg';
import iconimage from '../../../assets/image/icon-image.svg';
import iconimagesmall from '../../../assets/image/icon-image-small.svg';

//버튼 사용법
// props.name은 버튼에 들어가는 텍스트
// props.func은 버튼 누르면 실행될 함수
// props.disable=true disable됨
// LButton은 80%
// MButton은 30%
// MsButton은 20%
// SButton은 15%

// 버튼 공통
const Button = styled.button`
  border-radius: 50px;
`;
//버튼 공통 끝

// 버튼 긴거
const LongButton = styled(Button)`
  color: var(--color-lime);
  background-color: var(--color-navy);
  width: 80%;
  height: 44px;

  &:disabled {
    color: var(--color-maingrey);
    background-color: var(--color-steelblue);
  }
`;

export function LButton(props) {
  return (
    <LongButton onClick={props.func} disabled={props.disabled}>
      {props.name}
    </LongButton>
  );
}
//버튼 긴거 끝

//버튼 중간
const MediumButton = styled(Button)`
  color: var(--color-lime);
  background-color: var(--color-navy);
  width: 30%;
  height: 44px;

  &:active {
    background-color: var(--color-bg);
    color: var(--color-steelblue);
    border: 1px solid var(--color-steelblue);
    box-sizing: border-box;
  }

  &:disabled {
    color: var(--color-maingrey);
    background-color: var(--color-steelblue);
  }
`;

export function MButton(props) {
  return (
    <MediumButton onClick={props.func} disabled={props.disabled}>
      {props.name}
    </MediumButton>
  );
}
//버튼 중간 끝

//버튼 중소
const MediumSmallButton = styled(Button)`
  background-color: var(--color-lime);
  color: var(--color-navy);
  width: 20%;
  height: 32px;

  &:disabled {
    color: var(--color-maingrey);
    background-color: var(--color-steelblue);
  }
`;

export function MsButton(props) {
  return (
    <MediumSmallButton onClick={props.func} disabled={props.disabled}>
      {props.name}
    </MediumSmallButton>
  );
}
//버튼 중소 끝

//버튼 소
const SmallButton = styled(Button)`
  background-color: var(--color-navy);
  color: var(--color-lime);
  width: 15%;
  height: 32px;

  &:disabled {
    background-color: var(--color-bg);
    color: var(--color-steelblue);
    border: 1px solid var(--color-steelblue);
    box-sizing: border-box;
  }
`;

export function SButton(props) {
  return (
    <SmallButton onClick={props.func} disabled={props.disabled}>
      {props.name}
    </SmallButton>
  );
}
//버튼 소 끝

//버튼 태그
const TButton = styled(Button)`
  color: var(--color-lime);
  background-color: var(--color-navy);
  border-radius: 5px;
  width: 10%;
  height: 22px;
`;

export function TagButton(props) {
  return <TButton onClick={props.func}>{props.name}</TButton>;
}
//버튼 태그 끝

//sns버튼 1 3개밖에 없으니 다 만들자
const SnsButton = styled(Button)`
  background-color: var(--color-navy);
  width: 80%;
  height: 44px;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    display: inline-block;
    left: 30px;
  }
`;

const KButton = styled(SnsButton)`
  color: #f7e600;
  border: 1px solid #f7e600;
  &:before {
    background: url(${kakao}) no-repeat;
  }
`;

export function KakaoButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <KButton onClick={console.log('로그인')}>카카오톡 계정으로 로그인</KButton>
  );
}

const GButton = styled(SnsButton)`
  color: #fff;
  border: 1px solid #fff;

  &:before {
    background: url(${google}) no-repeat;
  }
`;

export function GoogleButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <GButton onClick={console.log('로그인')}>구글 계정으로 로그인</GButton>
  );
}

const FbButton = styled(SnsButton)`
  color: #85a5e9;
  border: 1px solid #85a5e9;

  &:before {
    background: url(${facebook}) no-repeat;
  }
`;

export function FacebookButton() {
  // return <SnsButton onClick={props.func}>페이스북으로 로그인</SnsButton>;
  return (
    <FbButton onClick={console.log('로그인')}>
      페이스북 계정으로 로그인
    </FbButton>
  );
}
// sns버튼끝

// img 버튼
const IButton = styled.button`
  background: url(${iconimagesmall}) no-repeat;
  background-color: var(--color-maingrey);
  background-position: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

export function ImgButton(props) {
  return <IButton onClick={props.func}></IButton>;
}

const FButton = styled.button`
  background: url(${iconimage}) no-repeat;
  background-color: var(--color-navy);
  background-position: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export function FileUploadButton(props) {
  return <FButton onClick={props.func}></FButton>;
}
