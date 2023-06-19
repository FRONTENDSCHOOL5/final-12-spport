import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import GameList from '../components/List/GameList';
import SelectFilter from '../components/Common/Filter/SelectFilter';
import {
  getGameInfo,
  getTeamName,
  filterGameInfo,
} from '../api/GameAPI/AddGameAPI';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  .section-header {
    border-bottom: 0.5px solid var(--color-maingrey);
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    background: white;
    gap: 10px;
    div:nth-child(2) {
      margin-left: auto;
    }
  }
  .section-game {
    padding: 80px 16px 16px;
  }
`;

export default function AddGame() {
  const [game, setGame] = useState([]); // total game 처음에 받아오고 변하지 않음
  const [filterGame, setFilterGame] = useState([]); // filtered game 필터링된 게임 저장
  const [team, setTeam] = useState([]); // 필터 내 팀 정보
  const [sport, setSport] = useState(['야구', '축구', '배구', '농구']); // 필터 내 스포츠 정보
  const [selectTeam, setSelectTeam] = useState('선택'); // 필터 내 선택된 팀 정보
  const [selectSport, setSelectSport] = useState('선택'); // 필터 내 선택된 스포츠 정보

  const test_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  // 처음에 전체 게임 정보와 팀 정보를 얻음
  useEffect(() => {
    const getData = async () => {
      const gameData = await getGameInfo(test_token);
      setGame(gameData);
      setFilterGame(gameData);
    };
    getData();
    setTeam(getTeamName());
  }, []);

  // 필터 내 팀 정보/스포츠 정보가 선택될 시 필터된 게임 정보를 가져옴
  useEffect(() => {
    const filteredGame = filterGameInfo(game, '야구', selectTeam);
    setFilterGame(filteredGame);
  }, [selectTeam]);

  return (
    <>
      <h1 className='a11y-hidden'>일정 추가</h1>
      <Header text='일정 추가' />
      <MainStyle>
        <section className='section-header'>
          <h2>경기 일정</h2>
          <SelectFilter
            type='스포츠'
            items={sport}
            selectItem={selectSport}
            setSelectItem={setSelectSport}
          />
          <SelectFilter
            type='팀'
            items={team}
            selectItem={selectTeam}
            setSelectItem={setSelectTeam}
          />
        </section>
        <section className='section-game'>
          <GameList games={filterGame} />
        </section>
      </MainStyle>
      <NavBar />
    </>
  );
}
