import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import styled from 'styled-components';
import MButton from '../Common/Button/MButton';
import GameList from '../List/GameList';
import { getGameInfoByTeam } from '../../api/GameAPI/TeamProfileGameAPI';

const SectionGameStyle = styled.section`
  background: white;
  h2 {
    border-bottom: 0.5px solid var(--color-maingrey);
    padding: 12px 20px;
  }
  ul {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);
`;

const BtnPlayer = styled.button`
  background-color: #fff;
  padding: 12px 0;
  border-top: 1px solid var(--color-maingrey);
  border-bottom: 1px solid var(--color-maingrey);
  &:not(:disabled):hover {
    background-color: var(--color-lime);
    color: var(--color-navy);
  }
`;

export default function TeamProfile({ profile }) {
  const [state, setState] = useState(false);
  const [game, setGame] = useState([]);
  const { id } = useParams();

  const handleState = () => {
    setState(!state);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };

    getData();
  }, []);

  return (
    <>
      <Container>
        <CommonProfile profile={profile}>
          <MButton
            text={state ? '언팔로우' : '팔로우'}
            func={handleState}
            active={state}
          />
        </CommonProfile>
        <BtnPlayer>선수보러가기</BtnPlayer>
        <SectionGameStyle className='section-game'>
          <h2>경기 일정</h2>
          <GameList games={game} />
        </SectionGameStyle>
      </Container>
    </>
  );
}
