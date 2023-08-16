import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

const CardListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media screen and (min-width: 1247px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1700px) {
    grid-template-columns: repeat(5, 1fr);
  }
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
