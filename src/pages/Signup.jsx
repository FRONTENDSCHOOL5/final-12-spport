import React from 'react';
import { H1Style, FormStyle } from './Login';
import Input from '../components/Common/Input';
import LButton from '../components/Common/Button/LButton';
import styled from 'styled-components';

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <LoginSection>
      <H1Style>이메일로 회원가입</H1Style>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          title='이메일'
          type='email'
          inputId='label-email'
          placeholder='이메일 주소를 입력해 주세요.'
        />
        <Input
          title='비밀번호'
          type='password'
          inputId='label-pw'
          placeholder='비밀번호를 설정해 주세요.'
        />
        <LButton text='다음'></LButton>
      </FormStyle>
    </LoginSection>
  );
}

const LoginSection = styled.section`
  div {
    margin: 30px auto 0 auto;
  }
`;
