import React from 'react';
import styled from 'styled-components';
import iconHome from '../../assets/image/icon-home.svg';
import iconHomeFill from '../../assets/image/icon-home-fill.svg';
import iconEdit from '../../assets/image/icon-edit.svg';
import iconMessage from '../../assets/image/icon-message.svg';
import iconMessageFill from '../../assets/image/icon-message-fill.svg';
import iconUser from '../../assets/image/icon-user.svg';
import iconUserFill from '../../assets/image/icon-user-fill.svg';
import { useNavigate } from 'react-router-dom';

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

// li 컴포넌트
function NavList(props) {
  // nav 버튼 클릭시 호출되는 함수
  // const handlePage = () => props.setCurrentPage(props.text);
  const navigate = useNavigate();
  const pageMap = new Map();
  pageMap.set('홈', '/home');
  pageMap.set('게시물 작성', '/upload');
  pageMap.set('채팅', '/chat');
  pageMap.set('프로필', '/myprofile');
  const handlePage = (e) => {
    navigate(pageMap.get(e.target.parentNode.textContent));
  };
  // 현재 클릭된 메뉴 버튼의 텍스트 컬러 변경 함수
  const textColor = () => {
    if (props.isSelected) {
      return 'var(--color-lime)';
    }
  };

  return (
    <li>
      <button type='button' onClick={handlePage} style={{ color: textColor() }}>
        <img src={props.source} />
        {props.text}
      </button>
    </li>
  );
}

// nav bar 컴포넌트
export default function NavBar(props) {
  const menu = [
    ['홈', iconHome, iconHomeFill],
    ['게시물 작성', iconEdit, iconEdit],
    ['채팅', iconMessage, iconMessageFill],
    ['프로필', iconUser, iconUserFill],
  ];

  // const [currentPage, setCurrentPage] = useState('홈');
  return (
    <NavContainer>
      <NavUnorderedList>
        {menu.map((item, index) => {
          return (
            <NavList
              key={index}
              source={props.currentPage === item[0] ? item[2] : item[1]}
              isSelected={props.currentPage === item[0]}
              text={item[0]}
              setCurrentPage={props.setCurrentPage}
            />
          );
        })}
      </NavUnorderedList>
    </NavContainer>
  );
}
