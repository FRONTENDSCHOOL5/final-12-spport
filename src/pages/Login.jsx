import React, { useState } from 'react';
import Input from '../components/Common/Input';
import styled from 'styled-components';
import LButton from '../components/Common/Button/LButton';
import { Link } from 'react-router-dom';
import { LinkWrap } from './Welcome';

export default function LoginPage() {
  return (
    <>
      <H1Style>로그인</H1Style>
      <FormStyle>
        <Input title='이메일' type='email' inputId='label-email' name='email' />
        <Input
          title='비밀번호'
          type='password'
          inputId='label-pw'
          name='password'
        />
        <LButton text='로그인' type='submit' />
      </FormStyle>
      <LinkWrap>
        <Link to='/signup'>이메일로 회원가입</Link>
      </LinkWrap>
    </>
  );
}

export const H1Style = styled.h1`
  text-align: center;
  padding-top: 32px;
  font-weight: bold;
  font-size: 24px;
  color: var(--color-navy);
`;

export const FormStyle = styled.form`
  max-width: 322px;
  padding-top: 30px;
  margin: 0 auto;

  label {
    font-size: 12px;
    color: var(--color-darkgrey);
  }

  button {
    width: 100%;
  }
`;
