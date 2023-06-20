import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';

const LikedGameStyle = styled.section`
  background: white;
  border-top: 1px solid var(--color-maingrey);
  border-bottom: 1px solid var(--color-maingrey);
  h2 {
    padding: 20px 20px 0;
  }
  ul {
    overflow-x: scroll;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);
`;
export default function UserProfile({ profile }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [likedGame, setLikedGame] = useState([]);
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };
  return (
    <Container>
      {/* 내 프로필인 조건 추가해서 나/다른 사람 프로필 조건부 렌더링 하기 */}
      <CommonProfile profile={profile}>
        {/* 내 프로필 */}
        {/* <MButton text='프로필 수정' active />
          <MButton text='일정 추가' active /> */}
        {/* 다른 사람 프로필 */}
        <button type='button'>
          <img src={IconShareBtn} alt='공유' />
        </button>
        <MButton
          text={state ? '언팔로우' : '팔로우'}
          func={handleState}
          active={state}
        />
        <button
          type='button'
          onClick={() => {
            navigate(`/chat/${id}`);
          }}
        >
          <img src={IconMessageBtn} alt='공유' />
        </button>
      </CommonProfile>

      <LikedGameStyle className='section-game'>
        <h2>직관 일정</h2>
        {/* <CardList games={likedGame} /> */}
      </LikedGameStyle>
    </Container>
  );
}
