import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchBoxStyle = styled.form`
  margin-right: auto;
  width: 100vw;
  .inp-search {
    font-size: 14px;
    color: var(--color-navy);
    background: var(--color-bg);
    border-radius: 32px;
    padding: 7px 16px;
    width: 100%;
    &::placeholder {
      color: var(--color-maingrey);
    }
  }
`;

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
    setKeyword('');
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
    // navigate(`/search/${keyword}`);
  };

  useEffect(() => {
    // +
    // 입력한 대로 바로 검색되도록
    const debounce = setTimeout(() => {
      if (keyword) {
        console.log(keyword);
        navigate(`/search/${keyword}`);
      }
      if (keyword === '') {
        navigate('/search');
      }
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <SearchBoxStyle onSubmit={handleSearchSubmit}>
      {console.log('Searchbox')}
      <label>
        <span className='a11y-hidden'>유저 또는 팀 계정을 검색해보세요!</span>
        <input
          className='inp-search'
          type='text'
          placeholder='계정 검색'
          onChange={handleInputChange}
          value={keyword}
        />
      </label>
    </SearchBoxStyle>
  );
}
