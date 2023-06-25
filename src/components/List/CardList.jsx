import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

const CardListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
`;

export default function CardList({ games }) {
  games.sort((a, b) => {
    const dateA = new Date(a.itemName.split(',')[0]);
    const dateB = new Date(b.itemName.split(',')[0]);
    if (dateA > dateB) {
      return 2;
    } else {
      return -1;
    }
  });
  return (
    <CardListStyle>
      {games.map((game) => {
        return <CardListItem key={game.id} game={game} />;
      })}
    </CardListStyle>
  );
}
