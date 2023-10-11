import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import iconHome from '../../assets/image/icon-home.svg';
import iconHomeFill from '../../assets/image/icon-home-fill.svg';
import iconEdit from '../../assets/image/icon-edit.svg';
import iconUser from '../../assets/image/icon-user.svg';
import iconUserFill from '../../assets/image/icon-user-fill.svg';
import iconSearch from '../../assets/image/icon-search-white.svg';
import iconSearchFill from '../../assets/image/icon-search-lime.svg';
import iconImage from '../../assets/logo/logo-small.svg';
import logoText from '../../assets/logo/text-logo.svg';
import iconMoreFill from '../../assets/image/icon-more.svg';
import iconMore from '../../assets/image/icon-more-white.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import useBottomSheet from '../../hooks/useBottomSheet';
import useAuth from '../../hooks/useAuth';

// nav 스타일 컴포넌트
const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: var(--color-navy);
  position: fixed;
  bottom: 0;
  z-index: 20;

  @media screen and (min-width: 768px) and (max-width: 1246px) {
    width: 60px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: unset;
  }

  @media screen and (min-width: 1247px) {
    width: 200px;
    height: 100%;
  }
`;
// ul과 ul 안의 li, button, img 스타일 컴포넌트
const NavUnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: column;

    li:last-child {
      position: absolute;
      bottom: 0;
    }
  }

  li {
    display: block;
    list-style: none;
    flex-basis: 0;
    flex-grow: 1;

    @media screen and (min-width: 768px) and (max-width: 1246px) {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      margin: 8px 0;
    }

    @media screen and (min-width: 1246px) {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      margin: 8px 0;
    }

    button {
      width: 100%;
      height: 60px;
      border: none;
      background-color: inherit;
      color: #fff;
      font-size: 10px;

      @media screen and (min-width: 768px) and (max-width: 1246px) {
        color: transparent;
      }

      @media screen and (min-width: 1247px) {
        font-size: 18px;
        text-align: start;
        transform: translateY(-6px);
        img {
          float: left;
        }
      }

      img {
        display: block;
        margin: 0 auto 4px;

        @media screen and (min-width: 768px) {
          margin: 0 18px;
        }
      }
    }
  }
`;

// nav bar 컴포넌트
function NavBar() {
  const navigate = useNavigate();
  const { accountname } = useAuth();
  const { logout } = useBottomSheet();

  const menu = [
    ['홈', 'home', iconHome, iconHomeFill],
    ['검색', 'search', iconSearch, iconSearchFill],
    ['게시물 작성', 'upload', iconEdit, iconEdit],
    ['프로필', `profile/${accountname}`, iconUser, iconUserFill],
    ['더보기', 'more', iconMore, iconMoreFill],
  ];

  const location = useLocation();
  const currentLocation = location.pathname.slice(1);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const handlePage = (item) => () => {
    navigate(`/${item[1]}`);
  };

  const handleMoreClick = () => {
    logout();
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setCurrentWidth(currentWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textColor = (isSelected) => {
    if (isSelected) {
      if (currentWidth >= 768 && currentWidth <= 1246) {
        return 'transparent';
      } else {
        return 'var(--color-lime)';
      }
    }
  };

  return (
    <NavContainer>
      <NavUnorderedList>
        {menu.map((item, index) => {
          const shouldShowMoreIcon = index === 4 && currentWidth < 768;
          return (
            <li
              key={index}
              style={{
                display: shouldShowMoreIcon ? 'none' : 'block',
              }}
            >
              {index === 0 && currentWidth >= 768 && currentWidth <= 1246 && (
                <button>
                  <img src={iconImage} alt='' />
                </button>
              )}
              {index === 0 && currentWidth > 1246 && (
                <button>
                  <img src={logoText} alt='' />
                </button>
              )}
              {index < 4 && (
                <button
                  id={`nav-${item[0]}`}
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
              )}
              {index === 4 && (
                <button type='button' onClick={handleMoreClick}>
                  <img src={item[2]} alt='' />
                  {item[0]}
                </button>
              )}
            </li>
          );
        })}
      </NavUnorderedList>
    </NavContainer>
  );
}

export default React.memo(NavBar);
