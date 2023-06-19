import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameInfoByTeam } from '../api/GameAPI/TeamProfileGameAPI';
import GameList from '../components/List/GameList';
import styled from 'styled-components';

const SectionGameStyle = styled.section`
  h2 {
    border-bottom: 0.5px solid var(--color-maingrey);
    padding: 12px 20px;
  }
  ul {
    padding: 20px;
  }
`;

export default function Profile() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };
    getData();
  }, []);
  return (
    <>
      <SectionGameStyle className='section-game'>
        <h2>경기 일정</h2>
        <GameList games={game} />
      </SectionGameStyle>
    </>
  );
}
