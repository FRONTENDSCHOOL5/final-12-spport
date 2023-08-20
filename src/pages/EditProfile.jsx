import React, { useState } from 'react';
import { ImageWrap, LabelImg, ProfileImg, IntroContainer } from './Signup';
import Input from '../components/Common/Input';
import { FormStyle, ErrorText } from './Login';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import tokenData from '../assets/data/sport_users.json';
import { Helmet } from 'react-helmet-async';
import useModal from '../hooks/useModal';
import useAuth from '../hooks/useAuth';

export default function EditProfile() {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [accountnameError, setAccountnameError] = useState('');
  const [introErrorMsg, setIntroErrorMsg] = useState('');

  const { token, accountname, userimage, setUserInfo } = useAuth();
  const [interest, setInterest] = useState('');
  const { functionModal } = useModal();

  const [initialAccountnameValue, setInitialAccountnameValue] =
    useState(accountname);

  const [userinfo, setUserinfo] = useState({
    user: {
      id: '',
      username: '',
      accountname: '',
      image: '',
      token: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'accountname') {
      setUserInfo({ accountname: value });
    }
    setUserinfo((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };
  console.log(userinfo);

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleInterestKeyDown = (e) => {
    if (e.key === 'Enter' && interest.trim() !== '') {
      const newInterest = interest.trim();

      if (
        !userinfo.user.intro
          .split(',')
          .some((item) => item.trim() === newInterest)
      ) {
        setUserinfo((prevState) => ({
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
    setUserinfo((prevState) => ({
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

  const handleEditProfile = async () => {
    try {
      const response = await fetch(URL + '/user/myinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserinfo(data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    handleEditProfile();
  }, [token]);

  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const response = await fetch(URL + '/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUserInfo({ userimage: URL + '/' + data.filename });
      setUserinfo((prevState) => ({
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

  const handleEdit = async (userinfo) => {
    try {
      const response = await fetch(URL + '/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userinfo }),
      });

      const res = await response.json();
      setErrorMsg(res.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUSaveClick = async (e) => {
    e.preventDefault();
    const editProfile = async () => {
      await handleEdit(userinfo);
      navigate(`/profile/${userinfo.user.accountname}`);
    };
    functionModal(
      '프로필을 수정하시겠습니까?',
      '수정',
      '프로필이 수정되었습니다',
      '확인',
      editProfile,
    );
  };

  const handleAccountnameValid = async () => {
    const accountData = {
      user: {
        accountname: accountname,
      },
    };

    if (accountname === initialAccountnameValue) {
      setAccountnameError('');
      setErrorMsg('');
      return;
    }

    const res = await fetch(URL + '/user/accountnamevalid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });

    const json = await res.json();

    setErrorMsg(json.message);

    const accountnames = tokenData.map((item) => item.accountname.substring(9));
    const errorMessage = '스포츠팀의 이름은 사용할 수 없습니다.';
    let accountnameErrorMessage = '';

    if (userinfo.user.accountname.slice(0, 6) === 'SPORT_') {
      accountnameErrorMessage = '앞에 SPORT_는 들어갈 수 없습니다.';
    } else if (accountnames.includes(userinfo.user.accountname)) {
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
      <Helmet>
        <title>프로필 수정 • Spport</title>
      </Helmet>
      <Header
        upload
        uploadText='저장'
        onUploadClick={(e) => handleUSaveClick(e)}
        disabled={hasErrorMsg}
      />
      <h1 className='a11y-hidden'>프로필 수정</h1>
      <StyledFormStyle>
        <ImageWrap>
          <LabelImg htmlFor='input-upload'>
            <ProfileImg src={userimage ? userimage : userinfo.user.image} />
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
          value={userinfo.user.username}
          name='username'
          onChange={handleInputChange}
        />
        <Input
          title='계정ID'
          type='text'
          inputId='label-accountname'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          value={userinfo.user.accountname}
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
        <IntroContainer>
          <strong>관심사</strong>
          <div>
            <ul>
              {userinfo.user.intro &&
                userinfo.user.intro.split(',').map((interestItem, index) => (
                  <li key={index} onClick={() => handleInterestRemove(index)}>
                    {interestItem}
                  </li>
                ))}
              <input
                type='text'
                value={interest}
                placeholder={
                  userinfo.user.intro
                    ? ''
                    : '자신의 관심사를 Enter를 눌러 추가해주세요.'
                }
                onChange={handleInterestChange}
                onKeyUp={handleInterestKeyDown}
              />
            </ul>
          </div>
          {introErrorMsg && <ErrorText>*{introErrorMsg}</ErrorText>}
        </IntroContainer>
      </StyledFormStyle>
    </>
  );
}

const StyledFormStyle = styled(FormStyle)`
  padding: 77px 0;
`;
