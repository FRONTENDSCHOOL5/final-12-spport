import React, { useState } from 'react';
import { H1Style, FormStyle } from './Login';
import Input from '../components/Common/Input';
import LButton from '../components/Common/Button/LButton';
import styled from 'styled-components';
import { ErrorText } from './Login';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/image/default-profile.png';
import uploadImg from '../assets/image/icon-image.svg';
import tokenData from '../assets/data/sport_users.json';
import closeBtn from '../assets/image/icon-x.svg';

export default function Signup() {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [accountnameError, setAccountnameError] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [introErrorMsg, setIntroErrorMsg] = useState('');
  const [emailPwValid, setEmailPwValid] = useState(false);
  const [changeProfile, setchangeProfile] = useState('');
  const [interest, setInterest] = useState('');
  const [userInfo, setUserInfo] = useState({
    user: {
      username: '',
      email: '',
      password: '',
      accountname: '',
      intro: '',
      image: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
    setErrorMsg('');
  };
  console.log(userInfo);

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleInterestKeyDown = (e) => {
    if (e.key === 'Enter' && interest.trim() !== '') {
      const newInterest = interest.trim();

      if (
        !userInfo.user.intro
          .split(',')
          .some((item) => item.trim() === newInterest)
      ) {
        setUserInfo((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            intro: prevState.user.intro
              ? prevState.user.intro + `,${newInterest}`
              : newInterest,
          },
        }));
        setIntroErrorMsg('');
      } else {
        setIntroErrorMsg('이미 추가된 관심사입니다.');
      }

      setInterest('');
    }
  };

  const handleInterestRemove = (index) => {
    setUserInfo((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        intro: prevState.user.intro
          .split(',')
          .filter((_, i) => i !== index)
          .join(','),
      },
    }));
  };

  const handleEmailValid = async () => {
    try {
      const userEmail = {
        user: {
          email: userInfo.user.email,
        },
      };
      const response = await fetch(URL + '/user/emailvalid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userEmail }),
      });
      const result = await response.json();
      if (result) {
        setEmailError(result.message);
        // console.log(result);
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const handlePasswordValid = () => {
    if (userInfo.user.password.length < 6) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleAccountnameValid = () => {
    const accountnames = tokenData.map((item) => item.accountname.substring(9));
    const errorMessage = '스포츠팀의 이름은 사용할 수 없습니다.';
    let accountnameErrorMessage = '';

    if (userInfo.user.accountname.slice(0, 6) === 'SPORT_') {
      accountnameErrorMessage = '앞에 SPORT_는 들어갈 수 없습니다.';
    } else if (accountnames.includes(userInfo.user.accountname)) {
      accountnameErrorMessage = errorMessage;
    }

    setAccountnameError(accountnameErrorMessage);
  };

  const goSignup = (e) => {
    e.preventDefault();
    if (userInfo.user.email && userInfo.user.password) {
      setEmailPwValid(true);
    }
  };

  const handleSignup = async (userInfo) => {
    try {
      const response = await fetch(URL + '/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userInfo }),
      });

      const res = await response.json();
      setErrorMsg(res.message);
      // console.log(res);

      if (res.message === '회원가입 성공') {
        navigate('/login');
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const response = await fetch(URL + '/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setchangeProfile(URL + '/' + data.filename);
      setUserInfo((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          image: URL + '/' + data.filename,
        },
      }));
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup(userInfo);
  };

  return (
    <>
      {emailPwValid ? (
        <div>
          <H1Style>프로필 설정</H1Style>
          <PStyle>나중에 언제든지 변경할 수 있습니다.</PStyle>
          <ImageWrap>
            <LabelImg htmlFor='input-upload'>
              <ProfileImg src={changeProfile ? changeProfile : profileImg} />
            </LabelImg>
            <input
              id='input-upload'
              className='a11y-hidden'
              type='file'
              onChange={handleImageUpload}
            />
          </ImageWrap>
          <FormStyle onSubmit={handleSubmit}>
            <Input
              title='사용자 이름'
              type='text'
              inputId='label-username'
              placeholder='2~10자 이내여야 합니다.'
              value={userInfo.user.username}
              name='username'
              onChange={handleInputChange}
            />
            <Input
              title='계정ID'
              type='text'
              inputId='label-accountname'
              placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
              value={userInfo.user.accountname}
              name='accountname'
              onChange={handleInputChange}
              onBlur={handleAccountnameValid}
              getError={
                errorMsg === '이미 사용중인 계정 ID입니다.' ||
                errorMsg === '영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.'
              }
            />
            {accountnameError && <ErrorText>*{accountnameError}</ErrorText>}
            {errorMsg && <ErrorText>*{errorMsg}</ErrorText>}
            <IntroContainer>
              <strong>관심사</strong>
              {/* <p>자신의 관심사를 Enter를 눌러 추가해주세요.</p> */}
              <div>
                <ul>
                  {userInfo.user.intro &&
                    userInfo.user.intro
                      .split(',')
                      .map((interestItem, index) => (
                        <li
                          key={index}
                          onClick={() => handleInterestRemove(index)}
                        >
                          {interestItem}
                        </li>
                      ))}
                  <input
                    type='text'
                    value={interest}
                    placeholder='자신의 관심사를 Enter를 눌러 추가해주세요.'
                    onChange={handleInterestChange}
                    onKeyDown={handleInterestKeyDown}
                  />
                </ul>
              </div>
              {introErrorMsg && <ErrorText>*{introErrorMsg}</ErrorText>}
            </IntroContainer>
            <LButton
              text='SSPORT 시작하기'
              type='submit'
              disabled={
                !userInfo.user.username ||
                !userInfo.user.accountname ||
                accountnameError
              }
            ></LButton>
          </FormStyle>
        </div>
      ) : (
        <div>
          <H1Style>이메일로 회원가입</H1Style>
          <FormStyle onSubmit={goSignup}>
            <Input
              title='이메일'
              type='email'
              inputId='label-email'
              placeholder='이메일 주소를 입력해 주세요.'
              value={userInfo.user.email}
              name='email'
              onChange={handleInputChange}
              onBlur={handleEmailValid}
              autoComplete='off'
              getError={
                emailError !== '사용 가능한 이메일 입니다.' &&
                userInfo.user.email !== ''
              }
            />
            {emailError && <ErrorText>*{emailError}</ErrorText>}
            <Input
              title='비밀번호'
              type='password'
              inputId='label-pw'
              placeholder='비밀번호를 설정해 주세요.'
              value={userInfo.user.password}
              name='password'
              onChange={handleInputChange}
              onBlur={handlePasswordValid}
              autoComplete='off'
              getError={passwordError === '비밀번호는 6자 이상이어야 합니다.'}
            />
            {passwordError && <ErrorText>*{passwordError}</ErrorText>}
            <LButton
              text='다음'
              type='button'
              disabled={
                !userInfo.user.email ||
                !userInfo.user.password ||
                emailError !== '사용 가능한 이메일 입니다.' ||
                passwordError
              }
            ></LButton>
          </FormStyle>
        </div>
      )}
    </>
  );
}

export const PStyle = styled.p`
  text-align: center;
  color: var(--color-steelblue);
  font-size: 14px;
  padding-top: 12px;
  margin-bottom: 30px;
`;

export const ImageWrap = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto 30px;
  position: relative;
`;

export const LabelImg = styled.label`
  display: block;
  position: relative;
  width: 110px;
  height: 110px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid var(--color-steelblue);

  ::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    background: var(--color-navy) url(${uploadImg}) center/ 60% auto no-repeat;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const IntroContainer = styled.div`
  strong {
    color: var(--color-darkgrey);
    font-size: 12px;
  }
  /* p {
    color: var(--color-lightgrey);
    font-size: 14px;
    padding: 5px 0;
  } */
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    border: 1px solid var(--color-lightgrey);
    border-radius: 5px;
    margin: 10px 0 17px 0;

    li {
      color: var(--color-lime);
      font-size: 14px;
      padding: 5px 20px 5px 5px;
      background: var(--color-navy) no-repeat right/ cover url(${closeBtn});
      background-size: 19px;
      border-radius: 5px;
      margin: 5px 0;
      cursor: pointer;
    }

    &:focus-within {
      border: 1px solid var(--color-navy);
    }

    input {
      width: 100%;
      color: var(--color-navy);
      font-size: 14px;
      outline: none;
      font-size: 14px;
      padding: 8px 0;
      flex: 1;

      &::placeholder {
        color: var(--color-lightgrey);
      }
    }
  }
`;
