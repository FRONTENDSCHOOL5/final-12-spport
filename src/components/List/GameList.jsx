import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameListItem from './GameListItem';
import { useInView } from 'react-intersection-observer';

const GameListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function GameList({ games }) {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(10);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 10);
    }
  }, [inView]);

  return (
    <GameListStyle>
      {games.map((game, index) => {
        if (index < page) {
          return <GameListItem key={game[1][0]} game={game} />;
        }
      })}
      <span ref={ref} />
    </GameListStyle>
  );
}
