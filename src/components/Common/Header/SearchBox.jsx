import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchBoxStyle = styled.form`
  width: 100vw;

  @media screen and (min-width: 768px) and (max-width: 1256px) {
    margin-left: 30px;
    .inp-search {
      border: 1px solid var(--color-lightgrey);
    }
  }

  @media screen and (min-width: 1247px) {
    margin-left: 170px;
    .inp-search {
      border: 1px solid var(--color-lightgrey);
    }
  }
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
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
    // navigate(`/search/${keyword}`);
  };

  useEffect(() => {
    // +
    // 입력하고 잠시 뒤 검색되도록
    const debounce = setTimeout(() => {
      // 글자수가 3자 이상일 때만 검색되도록
      if (keyword === '' || keyword.length < 3) {
        navigate('/search');
      }
      if (keyword.length >= 3) {
        navigate(`/search/${keyword}`);
      }
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <SearchBoxStyle onSubmit={handleSearchSubmit}>
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
