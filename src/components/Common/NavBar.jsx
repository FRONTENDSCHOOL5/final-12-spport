import React, { useState } from 'react';
import styled from 'styled-components';
import iconHome from '../../assets/image/icon-home.svg';
import iconHomeFill from '../../assets/image/icon-home-fill.svg';
import iconEdit from '../../assets/image/icon-edit.svg';
import iconMessage from '../../assets/image/icon-message.svg';
import iconMessageFill from '../../assets/image/icon-message-fill.svg';
import iconUser from '../../assets/image/icon-user.svg';
import iconUserFill from '../../assets/image/icon-user-fill.svg';
import { useNavigate, LInk, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accountname } from '../../atom/atom';

// nav 스타일 컴포넌트
const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: var(--color-navy);
  position: fixed;
  bottom: 0;
`;
// ul과 ul 안의 li, button, img 스타일 컴포넌트
const NavUnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  li {
    display: inline-block;
    list-style: none;
    flex-basis: 0;
    flex-grow: 1;
    button {
      width: 100%;
      height: 100%;
      border: none;
      background-color: inherit;
      color: #fff;
      font-size: 10px;
      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 4px;
      }
    }
  }
`;

// nav bar 컴포넌트
export default function NavBar(props) {
  const [username, setUsername] = useRecoilState(accountname);
  const navigate = useNavigate();

  const menu = [
    ['홈', 'home', iconHome, iconHomeFill],
    ['게시물 작성', 'upload', iconEdit, iconEdit],
    ['채팅', 'chat', iconMessage, iconMessageFill],
    ['프로필', `profile/${username}`, iconUser, iconUserFill],
  ];

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const currentLocation = location.pathname.slice(1);

  const handlePage = (item) => () => {
    setCurrentPage(item[1]);
    navigate(`/${item[1]}`);
  };

  const textColor = (isSelected) => {
    if (isSelected) {
      return 'var(--color-lime)';
    }
  };

  return (
    <NavContainer>
      <NavUnorderedList>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <button
                type='button'
                onClick={handlePage(item)}
                style={{ color: textColor(item[1] === currentLocation) }}
              >
                <img
                  src={item[1] === currentLocation ? item[3] : item[2]}
                  alt=''
                />
                {item[0]}
              </button>
            </li>
          );
        })}
      </NavUnorderedList>
    </NavContainer>
  );
}
