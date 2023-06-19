import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameInfoByTeam } from '../api/GameAPI/TeamProfileGameAPI';
import GameList from '../components/List/GameList';
import CardList from '../components/List/CardList';
import styled from 'styled-components';
import { getLikedGameAPI } from '../api/GameAPI/LikeGameAPI';

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

export default function Profile() {
  const [game, setGame] = useState([]);
  const [likedGame, setLikedGame] = useState([]);
  const { id } = useParams();
  const isTeam = id.startsWith('SPORT_');
  console.log(id);

  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };
    const getLikedGameData = async () => {
      const data = await getLikedGameAPI(test_token);
      setLikedGame(data);
    };

    if (isTeam) {
      getData();
    } else {
      getLikedGameData();
    }
  }, []);
  console.log(likedGame);
  return (
    <>
      {!isTeam && (
        <LikedGameStyle className='section-game'>
          <h2>직관 일정</h2>
          <CardList games={likedGame} />
        </LikedGameStyle>
      )}
      {isTeam && (
        <SectionGameStyle className='section-game'>
          <h2>경기 일정</h2>
          <GameList games={game} />
        </SectionGameStyle>
      )}
    </>
  );
}
