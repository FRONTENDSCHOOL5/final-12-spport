import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header/Header';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import SelectFilter from '../components/Common/Filter/SelectFilter';
import bsPlayerData from '../assets/data/baseball_players.json';
import tokenData from '../assets/data/sport_users.json';

export default function PlayerList() {
  const [position, setPosition] = useState([
    '투수',
    '외야수',
    '내야수',
    '포수',
  ]);
  const [selectPosition, setSelectPosition] = useState('선택');
  const { id } = useParams();

  const teamName = tokenData.map((item) => item.accountname);
  const sameName = tokenData.map((item) => item.username);
  const matchingTeam =
    sameName.find((_, index) => teamName[index] === id) || '';

  const teamPlayers = bsPlayerData.filter(
    (player) => player.team === matchingTeam.split(' ')[0],
  );

  const filteredPlayers =
    selectPosition === '전체'
      ? teamPlayers
      : teamPlayers.filter((player) => player.position === selectPosition);

  useEffect(() => {}, [filteredPlayers]);

  return (
    <>
      <h1 className='a11y-hidden'>선수 리스트</h1>
      <Header text='선수 리스트' />
      <MainContainer>
        <SectionFilter>
          <h2>{matchingTeam}</h2>
          <SelectFilter
            type='포지션'
            items={position}
            selectItem={selectPosition}
            setSelectItem={setSelectPosition}
          />
        </SectionFilter>
        <SectionList>
          <ul>
            {filteredPlayers.map((player, index) => (
              <li key={index}>
                <div>
                  <button>{player.uniform_number}</button>
                </div>
                <span>{player.name}</span>
                <PositionButton>{player.position}</PositionButton>
              </li>
            ))}
            {!filteredPlayers.length &&
              selectPosition !== '전체' &&
              teamPlayers.map((player, index) => (
                <li key={index}>
                  <div>
                    <button>{player.uniform_number}</button>
                  </div>
                  <span>{player.name}</span>
                  <PositionButton>{player.position}</PositionButton>
                </li>
              ))}
          </ul>
        </SectionList>
      </MainContainer>
      <NavBar />
    </>
  );
}

const MainContainer = styled.main`
  padding: 70px 15px 0 15px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`;

const SectionFilter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-bottom: 18px;
  h2 {
    font-size: 16px;
    color: var(--color-navy);
    font-weight: bold;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3%;
    width: 100vw;
    height: 1px;
    background-color: var(--color-maingrey);
  }
`;

const SectionList = styled.section`
  padding-bottom: 68px;
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    div {
      border: 3px solid var(--color-navy);
      border-radius: 50%;
      padding: 10px;

      button {
        font-size: 18px;
        font-weight: bold;
        width: 32px;
        height: 32px;
      }
    }

    span {
      font-size: 18px;
      color: var(--color-navy);
    }
  }
`;

const PositionButton = styled.button`
  padding: 8px 0;
  background-color: var(--color-navy);
  color: var(--color-lime);
  width: 56px;
  border-radius: 50px;
  font-size: 12px;
`;
