import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import { ProfileImage50 } from '../components/Common/ProfileImage';
import styled from 'styled-components';
import SButton from '../components/Common/Button/SButton';
import IconBaseball from '../assets/image/icon-baseball.svg';
import IconSoccer from '../assets/image/icon-soccer.svg';

const MainStyle = styled.main`
  padding: 50px 0 60px;
`;

const ListStyle = styled.li`
  display: flex;
  margin: 20px 16px;
  list-style: none;

  .text {
    padding: 5px 0 0 12px;
  }
  .text strong {
    font-size: 14px;
  }
  .text p {
    margin-top: 6px;
    font-size: 12px;
    color: #586c9d;
  }
  .btnBox {
    display: flex;
    align-items: center;
    margin-left: auto;
    .ball img {
      vertical-align: top;
      margin-right: 10px;
    }
  }
`;
function List(props) {
  const [state, setState] = useState(false);
  // followings 페이지의 팔로우/언팔로우 버튼
  const handleState = () => {
    if (props.page === 'followings') setState(!state);
  };
  return (
    <ListStyle>
      <ProfileImage50 image={props.image} />
      <div className='text'>
        <strong>{props.username}</strong>
        <p>@ {props.accountname}</p>
      </div>
      <div className='btnBox'>
        {/*  
          팀프로필과 사람프로필에 따라 팔로우버튼 옆에 공 아이콘 표시 조건부렌더링
          sort가 teamProfile이면 공 표시
          data받아올 때 sort받아와야함(yourProfile, myProfile, teamProfile baseball/soccer) 
        */}
        {props.sort === 'teamProfile baseball' ? (
          <button className='ball'>
            <img src={IconBaseball} alt='' />
          </button>
        ) : props.sort === 'teamProfile soccer' ? (
          <button className='ball'>
            <img src={IconSoccer} alt='' />
          </button>
        ) : null}
        <SButton
          // followings 페이지와 followers 페이지의 버튼의 텍스트가 다름
          text={
            props.page === 'followings'
              ? state === false
                ? '팔로우'
                : '취소'
              : state === false
              ? '삭제'
              : null
          }
          page={props.page}
          func={props.page === 'followings' ? handleState : props.func}
          // followers 페이지의 버튼의 기본 css가 원래 버튼이 active 상태일 때 css이므로 active된 상태의 css로 보여야하기 때문에 !state 값을 넣어줌
          active={props.page === 'followings' ? state : !state}
        />
      </div>
    </ListStyle>
  );
}

function Followers(props) {
  const [followers, setFollowers] = useState([
    {
      username: '야구러버',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '나 야구 좋아하네',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '스포츠면 다 좋아',
      accountname: 'like_sports',
      image: '',
      page: 'followers',
    },
    {
      username: '야구러버',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '나 야구 좋아하네',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '스포츠면 다 좋아',
      accountname: 'like_sports',
      image: '',
      page: 'followers',
    },
    {
      username: '야구러버',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '나 야구 좋아하네',
      accountname: 'baseball_lover',
      image: '',
      page: 'followers',
    },
    {
      username: '스포츠면 다 좋아',
      accountname: 'like_sports',
      image: '',
      page: 'followers',
    },
  ]);
  const handleList = (item) => {
    setFollowers(
      followers.filter((i) => {
        return item !== i;
      }),
    );
  };
  return (
    <>
      <BrowserRouter>
        <Header text='Followers' />
      </BrowserRouter>
      <MainStyle>
        <ul>
          {followers.map((item) => {
            return (
              <List
                username={item.username}
                accountname={item.accountname}
                image={item.image}
                page='followers'
                func={() => handleList(item)}
              />
            );
          })}
        </ul>
      </MainStyle>
      <NavBar
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  );
}

function Followings(props) {
  return (
    <>
      <BrowserRouter>
        <Header text='Followings' />
      </BrowserRouter>
      <MainStyle>
        <ul>
          <List
            username='삼성 블루윙즈'
            accountname='baseball_lover'
            image=''
            page='followings'
            sort='teamProfile baseball'
          />
          <List
            username='대구fc'
            accountname='I_love_bs'
            image=''
            page='followings'
            sort='teamProfile soccer'
          />
          <List
            username='스포츠면 다 좋아'
            accountname='like_sports'
            image=''
            page='followings'
            sort='yourProfile'
          />
          <List
            username='삼성 블루윙즈'
            accountname='baseball_lover'
            image=''
            page='followings'
            sort='teamProfile baseball'
          />
          <List
            username='대구fc'
            accountname='I_love_bs'
            image=''
            page='followings'
            sort='teamProfile soccer'
          />
          <List
            username='스포츠면 다 좋아'
            accountname='like_sports'
            image=''
            page='followings'
            sort='yourProfile'
          />
          <List
            username='삼성 블루윙즈'
            accountname='baseball_lover'
            image=''
            page='followings'
            sort='teamProfile baseball'
          />
          <List
            username='대구fc'
            accountname='I_love_bs'
            image=''
            page='followings'
            sort='teamProfile soccer'
          />
          <List
            username='스포츠면 다 좋아'
            accountname='like_sports'
            image=''
            page='followings'
            sort='yourProfile'
          />
          <List
            username='삼성 블루윙즈'
            accountname='baseball_lover'
            image=''
            page='followings'
            sort='teamProfile baseball'
          />
          <List
            username='대구fc'
            accountname='I_love_bs'
            image=''
            page='followings'
            sort='teamProfile soccer'
          />
          <List
            username='스포츠면 다 좋아'
            accountname='like_sports'
            image=''
            page='followings'
            sort='yourProfile'
          />
        </ul>
      </MainStyle>
      <NavBar
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  );
}

export { Followers, Followings };
