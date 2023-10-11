import React, { useState } from 'react';
import Input from '../components/Common/Input';
import styled from 'styled-components';
import LButton from '../components/Common/Button/LButton';
import { Link, useNavigate } from 'react-router-dom';
import { LinkWrap } from './Welcome';
import useAuth from '../hooks/useAuth';

export default function LoginPage() {
  const URL = 'https://api.mandarin.weniv.co.kr/user/login';
  const navigate = useNavigate();

  const [isCorrect, setIsCorrect] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const { setUserInfo } = useAuth();

  const [userinfo, setUserinfo] = useState({
    user: {
      email: 'only_lions@test.com',
      password: 'only_lions123',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserinfo((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));

    if (name === 'email') {
      if (value === '') {
        setEmailErrorMsg('*이메일을 입력해주세요.');
      } else {
        setEmailErrorMsg('');
      }
    } else if (name === 'password') {
      if (value === '') {
        setPasswordMsg('*비밀번호를 입력해주세요.');
      } else if (value.length < 6) {
        setPasswordMsg('*비밀번호는 6자 이상이어야 합니다.');
      } else {
        setPasswordMsg('');
      }
    }

    const { email, password } = userinfo.user;
    if (email && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userinfo }),
      });

      const data = await response.json();

      if (!data.message) {
        const userData = data.user;
        const { token, accountname, username, intro, image } = userData;
        setUserInfo({
          token: token,
          isLogin: true,
          accountname: accountname,
          username: username,
          intro: intro,
          userimage: image,
        });

        navigate('/home');
      } else if (data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setIsCorrect(false);
        setLoginErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      <H1Style>로그인</H1Style>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          title='이메일'
          type='email'
          inputId='label-email'
          value={userinfo.user.email}
          name='email'
          onChange={handleInputChange}
        />
        {emailErrorMsg && <ErrorText>{emailErrorMsg}</ErrorText>}
        <Input
          title='비밀번호'
          type='password'
          inputId='label-pw'
          value={userinfo.user.password}
          name='password'
          onChange={handleInputChange}
        />
        {passwordMsg && <ErrorText>{passwordMsg}</ErrorText>}
        {isCorrect === false && <ErrorText>{loginErrorMsg}</ErrorText>}
        <LButton text='로그인' type='submit' disabled={buttonDisabled} />
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

export const ErrorText = styled.p`
  color: var(--color-red);
  font-size: 12px;
  margin: -10px 0 25px 0;
`;
