import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import iconBack from '../../../assets/image/icon-back.svg';
import iconMore from '../../../assets/image/icon-more.svg';
import iconSearch from '../../../assets/image/icon-search-lime.svg';
import logoText from '../../../assets/logo/text-logo.svg';
import SearchBox from './SearchBox';
import FeedFilter from '../Filter/FeedFilter';
import MsButton from '../Button/MsButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  isBottomSheetOpen,
  bottomSheetItems,
} from '../../../atom/bottomSheetAtom';
import { isModalOpen, modalItems } from '../../../atom/modalAtom';
import {
  userToken,
  loginState,
  accountname,
  userimage,
} from '../../../atom/loginAtom';

const HeaderStyle = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: var(--color-navy);
  position: fixed;
  width: 100%;
  z-index: 10;
  .header-title {
    color: var(--color-lime);
    font-size: 14px;
  }
  button:not(.btn-back) {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    display: ${(props) => (props.text ? 'none' : 'flex')};
    background: ${(props) =>
      !props.text && !props.main && !props.search
        ? 'var(--color-navy)'
        : 'transparent'};
    .header-title,
    .btn-search {
      display: none;
    }
  }
`;

// basic-header = <Header onMoreClick={handleMoreClick} text/>
// search-header = <Header search/>
// main-header = <Header onSearchClick={handleSearchClick} main/>
// upload-header = <Header onUploadClick={handleUploadClick} upload/>
// text-header = <Header text="text" onMoreClick={handleMoreClick}/>
export default function Header({
  text,
  search,
  upload,
  main,
  onUploadClick,
  setFilterClick,
  uploadText,
  disabled,
  isChatRoom,
}) {
  const navigate = useNavigate();
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [bsItems, setBsItems] = useRecoilState(bottomSheetItems);
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);

  // Login와 User
  const [token, setToken] = useRecoilState(userToken);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [userImage, setUserImage] = useRecoilState(userimage);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleSearchClick = () => {
    navigate('/search');
  };
  const handleMoreClick = () => {
    setIsBsOpen((prev) => !prev);
    if (isChatRoom) {
      const leaveChatRoom = () => {
        setIsBsOpen(false);
        setIsModal(true);
        const leaveRoom = async () => {
          navigate('/chat');
          setIsModal(false);
        };
        setModalItem(['채팅방을 나가시겠어요?', '나가기', leaveRoom]);
      };
      const chatRoomBsItems = [['채팅방 나가기', leaveChatRoom]];
      setBsItems(chatRoomBsItems);
    } else {
      const onInfoClick = () => {
        alert('info');
        setIsBsOpen(false);
      };
      const resetLogin = () => {
        setToken('');
        setIsLogin(false);
        setAccountName('');
        setUserImage('');
      };
      const onLogout = () => {
        setIsBsOpen(false);
        setIsModal(true);
        const logout = async () => {
          await resetLogin();
          navigate('/welcome');
          setIsModal(true);
          setModalItem(['로그아웃되었습니다.', '확인', function () {}]);
        };
        setModalItem(['로그아웃하시겠어요?', '로그아웃', logout]);
      };
      const loginBsItems = [
        ['설정 및 개인정보', onInfoClick],
        ['로그아웃', onLogout],
      ];
      setBsItems(loginBsItems);
    }
  };

  return (
    <HeaderStyle text={text} search={search} main={main}>
      {main || (
        <button className='btn-back' type='button' onClick={handleBackClick}>
          <img src={iconBack} alt='뒤로 가기' />
        </button>
      )}
      {text?.length > 0 && <span className='header-title'>{text}</span>}
      {search && <SearchBox />}
      {text && (
        <button className='btn-more' type='button' onClick={handleMoreClick}>
          <img src={iconMore} alt='더보기' />
        </button>
      )}
      {main && (
        <>
          <span className='header-title'>
            <img src={logoText} />
          </span>
          <FeedFilter setFilterClick={setFilterClick} />
          <button
            className='btn-search'
            type='button'
            onClick={handleSearchClick}
          >
            <img src={iconSearch} alt='검색하기' />
          </button>
        </>
      )}
      {upload && (
        <MsButton
          text={uploadText || '업로드'}
          func={(e) => onUploadClick(e)}
          disabled={disabled}
        />
      )}
    </HeaderStyle>
  );
}
