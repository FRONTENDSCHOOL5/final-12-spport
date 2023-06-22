import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';
import { getLikedGameAPI } from '../../api/GameAPI/LikeGameAPI';
import { useRecoilState } from 'recoil';
import { userToken } from '../../atom/loginAtom';

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

function UserProfile({ profile }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [likedGame, setLikedGame] = useState([]);
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };
  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const getLikedGameData = async () => {
      const data = await getLikedGameAPI(test_token);
      setLikedGame(data);
    };
    getLikedGameData();
  }, []);

  return (
    <Container>
      <CommonProfile profile={profile}>
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
        <CardList games={likedGame} />
      </LikedGameStyle>
    </Container>
  );
}

function MyProfile({ profile }) {
  const navigate = useNavigate();
  const [likedGame, setLikedGame] = useState([]);
  const [token, setToken] = useRecoilState(userToken);

  useEffect(() => {
    const getLikedGameData = async () => {
      const data = await getLikedGameAPI(token);
      setLikedGame(data);
    };
    getLikedGameData();
  }, []);
  return (
    <Container>
      <CommonProfile profile={profile}>
        <MButton
          text='프로필 수정'
          func={() => {
            navigate('/edit');
          }}
          active
        />
        <MButton
          text='일정 추가'
          func={() => {
            navigate('/addgame');
          }}
          active
        />
      </CommonProfile>

      <LikedGameStyle className='section-game'>
        <h2>직관 일정</h2>
        <CardList games={likedGame} />
      </LikedGameStyle>
    </Container>
  );
}

export { UserProfile, MyProfile };
