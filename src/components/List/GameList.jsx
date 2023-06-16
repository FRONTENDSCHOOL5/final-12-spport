import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameListItem from './GameListItem';

const GameListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function GameList({ games }) {
  return (
    <GameListStyle>
      {games.map((game) => {
        return <GameListItem key={game[1][0]} game={game} />;
      })}
    </GameListStyle>
  );
}
