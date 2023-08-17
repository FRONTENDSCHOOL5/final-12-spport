import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import GameList from '../components/List/GameList';
import SelectFilter from '../components/Common/Filter/SelectFilter';
import { getGameInfo } from '../api/GameAPI/AddGameAPI';
import { getTeamName, filterGameInfo } from '../util/gameUtil';
import Empty from '../components/Common/Empty';
import GameLoader from '../components/Skeleton/GameLoader';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  .section-header {
    border-bottom: 0.5px solid var(--color-maingrey);
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    background: white;
    gap: 10px;
    div:nth-child(2) {
      margin-left: auto;
    }
  }
  .section-game {
    padding: 15px 16px 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1246px) {
    margin-left: 60px;
    padding-top: 0;
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
    padding-top: 0;
  }
`;

export default function AddGame() {
  const [isLoad, setIsLoad] = useState(false);
  const [game, setGame] = useState([]); // total game 처음에 받아오고 변하지 않음
  const [filterGame, setFilterGame] = useState([]); // filtered game 필터링된 게임 저장
  const [team, setTeam] = useState([]); // 필터 내 팀 정보
  const [sport, setSport] = useState(['야구', '축구', '배구']); // 필터 내 스포츠 정보
  const [selectTeam, setSelectTeam] = useState('선택'); // 필터 내 선택된 팀 정보
  const [selectSport, setSelectSport] = useState('선택'); // 필터 내 선택된 스포츠 정보

  // 처음에 전체 게임 정보와 팀 정보를 얻음
  useEffect(() => {
    const getData = async () => {
      setIsLoad(true);
      const gameData = await getGameInfo();
      setGame(gameData);
      setFilterGame(gameData);
      setIsLoad(false);
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
          {!isLoad && filterGame.length === 0 && (
            <Empty
              message='관심있는 스포츠 팀을 팔로우 해보세요!'
              btnText='검색하기'
              link='/search/SPORT_'
            />
          )}
          {isLoad ? <GameLoader /> : <GameList games={filterGame} />}
        </section>
      </MainStyle>
      <NavBar />
    </>
  );
}
