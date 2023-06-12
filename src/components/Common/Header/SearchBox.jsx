import React from 'react';
import styled from 'styled-components';

const SearchBoxStyle = styled.form`
  margin-left: auto;
  .inp-search {
    font-size: 14px;
    color: var(--color-navy);
    background: var(--color-bg);
    border-radius: 32px;
    padding: 7px 16px;
    width: 316px;
    &::placeholder {
      color: var(--color-maingrey);
    }
  }
`;

export default function SearchBox() {
  return (
    <SearchBoxStyle>
      <label>
        <span className='a11y-hidden'>유저 또는 팀 계정을 검색해보세요!</span>
        <input className='inp-search' type='text' placeholder='계정 검색' />
      </label>
    </SearchBoxStyle>
  );
}
