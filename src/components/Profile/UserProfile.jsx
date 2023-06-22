import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';
import { useRecoilState } from 'recoil';
import { userToken, accountname } from '../../atom/loginAtom';
import { getProductAPI } from '../../api/AddProductAPI';

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
  const [planGame, setPlanGame] = useState([]);
  const [state, setState] = useState(false);
  const [token, setToken] = useRecoilState(userToken);
  const handleState = () => {
    setState(!state);
  };

  useEffect(() => {
    const getLikedGameData = async () => {
      const plan = await getProductAPI(token, id);
      setPlanGame(plan);
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
        {Object.keys(planGame).length > 0 && <CardList games={planGame.product} />}
      </LikedGameStyle>
    </Container>
  );
}

function MyProfile({ profile }) {
  const navigate = useNavigate();
  const [planGame, setPlanGame] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const [accountName, setAccountName] = useRecoilState(accountname);

  useEffect(() => {
    const getLikedGameData = async () => {
      const plan = await getProductAPI(token, accountName);
      setPlanGame(plan);
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
        {Object.keys(planGame).length > 0 && <CardList games={planGame.product} />}
      </LikedGameStyle>
    </Container>
  );
}

export { UserProfile, MyProfile };
