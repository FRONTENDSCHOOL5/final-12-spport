import React, { useState, useEffect, useCallback } from 'react';
import Input from '../components/Common/Input';
import styled from 'styled-components';
import LButton from '../components/Common/Button/LButton';
import { Link, useNavigate } from 'react-router-dom';
import { LinkWrap } from './Welcome';
import { useRecoilState } from 'recoil';
import { userToken, loginState, accountname } from '../atom/atom';

export default function LoginPage() {
  const URL = 'https://api.mandarin.weniv.co.kr/user/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwMessage, setPwMessage] = useState('');

  const [userTokenAtom, setUserTokenAtom] = useRecoilState(userToken);
  const [loginStateAtom, setLoginStateAtom] = useRecoilState(loginState);
  const [accountName, setAccountName] = useRecoilState(accountname);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (email === '') {
      setEmailError('*이메일을 입력해주세요.');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid('');
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    if (password === '') {
      setPwMessage('*비밀번호를 입력해주세요.');
    } else if (password.length < 6) {
      setPwMessage('*비밀번호는 6자 이상이어야 합니다.');
    } else {
      setPwMessage('');
      setLoginError('');
    }
  };

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(false);
      setIsCorrect(true);
      setLoginError(null);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password,
            },
          }),
        });

        const data = await response.json();

        if (!data.message) {
          const userData = data.user;
          const { token, accountname } = userData;
          setUserTokenAtom(token);
          setLoginStateAtom(true);
          setAccountName(accountname);

          navigate('/home');
        } else if (
          data.message === '이메일 또는 비밀번호가 일치하지 않습니다.'
        ) {
          setIsCorrect(false);
          setLoginError('* 이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    },
    [email, password, navigate],
  );

  return (
    <>
      <H1Style>로그인</H1Style>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          title='이메일'
          type='email'
          inputId='label-email'
          value={email}
          name='email'
          onChange={handleEmailChange}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}
        <Input
          title='비밀번호'
          type='password'
          inputId='label-pw'
          value={password}
          name='password'
          onChange={handlePasswordChange}
        />
        {pwMessage && <ErrorText>{pwMessage}</ErrorText>}
        {isCorrect === false && <ErrorText>{loginError}</ErrorText>}
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
