import React from 'react';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import SelectFilter from '../components/Common/Filter/SelectFilter';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  .section-header {
    border-bottom: 0.5px solid var(--color-maingrey);
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
  }
  .section-game {
    padding: 16px;
  }
`;

export default function AddGame() {
  return (
    <>
      <h1 className='a11y-hidden'>일정 추가</h1>
      <Header text='일정 추가' />
      <MainStyle>
        <section className='section-header'>
          <h2>경기 일정</h2>
          {/* <SelectFilter /> */}
          {/* <SelectFilter /> */}
        </section>
        <section className='section-game'></section>
      </MainStyle>
      <NavBar />
    </>
  );
}
