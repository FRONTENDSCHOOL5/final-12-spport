import React, { useState } from 'react';
import { ImageWrap, LabelImg, ProfileImg } from './Signup';
import Input from '../components/Common/Input';
import { FormStyle, ErrorText } from './Login';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userToken,
  accountname,
  userimage,
  username,
  intro,
} from '../atom/loginAtom';
import bsData from '.././data/sport_bs_users.json';

export default function EditProfile() {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [accountnameError, setAccountnameError] = useState('');

  const token = useRecoilValue(userToken);
  const [accountNameValue, setAccountNameValue] = useRecoilState(accountname);
  const [userimageValue, setUserimageValue] = useRecoilState(userimage);
  const [usernameValue, setUsernameValue] = useRecoilState(username);
  const [introValue, setIntroValue] = useRecoilState(intro);

  const [userInfo, setUserInfo] = useState({
    user: {
      username: usernameValue,
      accountname: accountNameValue,
      intro: introValue,
      image: userimageValue,
    },
  });

  console.log(userInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
    if (name === 'username') {
      setUsernameValue(value);
    } else if (name === 'accountname') {
      setAccountNameValue(value);
    } else if (name === 'intro') {
      setIntroValue(value);
    }

    setErrorMsg('');
  };
  // console.log(userInfo);

  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const response = await fetch(URL + '/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUserimageValue(URL + '/' + data.filename);
      setUserInfo((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          image: URL + '/' + data.filename,
        },
      }));
    } catch (error) {
      console.error('error', error);
      return '';
    }
  };

  const handleEdit = async (userInfo) => {
    try {
      const response = await fetch(URL + '/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userInfo }),
      });

      const result = await response.json();
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUSaveClick = async (e) => {
    e.preventDefault();
    await handleEdit(userInfo);
    navigate(`/profile/${userInfo.user.accountname}`);
  };

  const handleAccountnameValid = async () => {
    const accountData = {
      user: {
        accountname: accountNameValue,
      },
    };
    const res = await fetch(URL + '/user/accountnamevalid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    const json = await res.json();
    // console.log(json);
    setErrorMsg(json.message);

    const accountnames = bsData.map((item) => item.accountname.substring(9));
    const errorMessage = '스포츠팀의 이름은 사용할 수 없습니다.';
    let accountnameErrorMessage = '';

    if (userInfo.user.accountname.slice(0, 6) === 'SPORT_') {
      accountnameErrorMessage = '앞에 SPORT_는 들어갈 수 없습니다.';
    } else if (accountnames.includes(userInfo.user.accountname)) {
      accountnameErrorMessage = errorMessage;
    }

    setAccountnameError(accountnameErrorMessage);
    setErrorMsg(accountnameErrorMessage ? '' : json.message);
  };

  const hasErrorMsg =
    (errorMsg !== '' || accountnameError !== '') &&
    errorMsg !== '사용 가능한 계정ID 입니다.';

  return (
    <>
      <Header
        upload
        uploadText='저장'
        onUploadClick={(e) => handleUSaveClick(e)}
        disabled={hasErrorMsg}
      />
      <StyledFormStyle>
        <ImageWrap>
          <LabelImg htmlFor='input-upload'>
            <ProfileImg
              src={userimageValue ? userimageValue : userInfo.user.image}
            />
          </LabelImg>
          <input
            id='input-upload'
            className='a11y-hidden'
            type='file'
            onChange={handleImageUpload}
          />
        </ImageWrap>

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
          getError={
            errorMsg === '이미 사용중인 계정 ID입니다.' ||
            errorMsg === '영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.'
          }
          onBlur={handleAccountnameValid}
        />
        {accountnameError && <ErrorText>*{accountnameError}</ErrorText>}
        {errorMsg && <ErrorText>*{errorMsg}</ErrorText>}
        <Input
          title='관심사'
          type='text'
          inputId='label-intro'
          placeholder='자신의 관심사를 추가해주세요. (,)로 구분해주세요.'
          value={userInfo.user.intro}
          name='intro'
          onChange={handleInputChange}
        />
      </StyledFormStyle>
    </>
  );
}

const StyledFormStyle = styled(FormStyle)`
  padding: 77px 0;
`;
