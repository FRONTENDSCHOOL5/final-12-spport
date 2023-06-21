import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage50 } from '../Common/ProfileImage';
import styled from 'styled-components';
import SButton from '../Common/Button/SButton';
import IconBaseball from '../../assets/image/icon-baseball.svg';
import IconSoccer from '../../assets/image/icon-soccer.svg';

const ListStyle = styled.li`
  display: flex;
  padding: 10px 16px;
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
    .btnBall img {
      vertical-align: top;
      margin-right: 10px;
    }
    button {
      font-size: 12px;
    }
  }
  & > button {
    display: flex;
    text-align: start;
    /* btnBox의 left margin을 어떤걸 사용해서 채워줄지 고민 */
    /* flex-basis: 100%; */
    width: 100%;
  }
`;
export default function FollowList({
  username,
  accountname,
  image,
  page,
  func,
}) {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  // followings 페이지의 팔로우/언팔로우 버튼
  const handleState = () => {
    if (page === 'followings') setState(!state);
  };
  return (
    <ListStyle>
      <button type='button' onClick={() => navigate(`/profile/${accountname}`)}>
        <ProfileImage50 image={image} />
        <div className='text'>
          <strong>{username}</strong>
          <p>
            @{' '}
            {accountname.startsWith('SPORT_')
              ? accountname.slice(9)
              : accountname}
          </p>
        </div>
      </button>
      <div className='btnBox'>
        {/*  
          팀프로필 및 사람프로필에 따라 팔로우버튼 옆 공 아이콘 유무 조건부렌더링
        */}
        {accountname.startsWith('SPORT_BS') ? (
          <button className='btnBall'>
            <img src={IconBaseball} alt='' />
          </button>
        ) : accountname.startsWith('SPORT_SC') ? (
          <button className='btnBall'>
            <img src={IconSoccer} alt='' />
          </button>
        ) : null}
        <SButton
          // followings 페이지와 followers 페이지의 버튼의 텍스트 차이
          text={
            page === 'followings'
              ? state === false
                ? '취소'
                : '팔로우'
              : state === false
              ? '삭제'
              : null
          }
          page={page}
          func={page === 'followings' ? handleState : func}
          // 버튼의 css가 반대여야하므로 !state 값을 넣어줌
          active={!state}
        />
      </div>
    </ListStyle>
  );
}
