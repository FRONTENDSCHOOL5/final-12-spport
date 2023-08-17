import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import { getProductAPI } from '../api/AddProductAPI';
import Empty from '../components/Common/Empty';
import GameGrid from '../components/List/CardGrid';
import { useParams } from 'react-router-dom';
import CardLoader from '../components/Skeleton/CardLoader';
import { Helmet } from 'react-helmet-async';

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
  }
  .section-game {
    padding: 60px 16px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin-left: 60px;
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
  }
`;

export default function Schedule() {
  const [isLoad, setIsLoad] = useState(false);
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoad(true);
      const plan = await getProductAPI(id);
      setGame(plan);
      setIsLoad(false);
    };
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>직관 일정 • Spport</title>
      </Helmet>
      <h1 className='a11y-hidden'>직관일정 전체보기</h1>
      <Header text />
      <MainStyle>
        <section className='section-header'>
          <h2>직관 일정</h2>
        </section>
        <section className='section-game'>
          {!isLoad && game.length === 0 && (
            <Empty
              message='직관 일정을 추가해보세요'
              btnText='추가하기'
              link='/addgame'
            />
          )}
          {isLoad ? <CardLoader /> : <GameGrid games={game} />}
        </section>
      </MainStyle>
      <NavBar />
    </>
  );
}
