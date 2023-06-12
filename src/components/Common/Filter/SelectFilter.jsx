import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import iconToggle from '../../../assets/image/icon-toggle.svg';

const SelectFilterStyle = styled.div`
  position: relative;
  width: 105px;
  * {
    color: var(--color-steelblue);
  }
  .btn-select {
    width: 100%;
    padding: 7px 20px;
    background: white;
    border: 1px solid var(--color-steelblue);
    border-radius: 50px;
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 12px;
      height: 12px;
      top: 10px;
      right: 6px;
      background: url(${iconToggle}) center right no-repeat;
      transition: 0.1s ease;
    }
    &.on:after {
      transform: rotate(180deg);
    }
  }
  .list-select {
    position: absolute;
    width: 100%;
    max-height: 100px;
    overflow: scroll;
    top: 35px;
    left: 0;
    background: white;
    border: 1px solid var(--color-steelblue);
    border-radius: 15px;
    padding: 8px 8px 0 8px;
    li button {
      width: 86px;
      height: 18px;
      border-radius: 50px;
      margin-bottom: 4px;
      &:hover,
      &:focus {
        color: white;
        background: var(--color-steelblue);
      }
    }
  }
`;

export default function SelectFilter({ type, items }) {
  const [filterClick, setFilterClick] = useState(false);
  const [selectItem, setSelectItem] = useState('전체'); // 나중에 props로 받아야 함
  const handleFilterClick = () => {
    setFilterClick((prev) => !prev);
  };

  const handleSelectClick = (item) => () => {
    setSelectItem(item);
    setFilterClick(false);
  };

  useEffect(() => {
    const listSelect = document.querySelector('.list-select');
    const btnSelect = document.querySelector('.btn-select');
    if (filterClick) {
      listSelect.style.display = 'block';
      btnSelect.classList.add('on');
    } else {
      listSelect.scrollTo(0, 0);
      listSelect.style.display = 'none';
      btnSelect.classList.remove('on');
    }
  }, [filterClick]);

  useEffect(() => {
    const btnSelect = document.querySelector('.btn-select');
    btnSelect.textContent = selectItem;
  }, [selectItem]);

  return (
    <SelectFilterStyle className='select-filter'>
      <button className='btn-select' type='button' onClick={handleFilterClick}>
        {type} 선택
      </button>
      <ul className='list-select'>
        {items.map((item) => {
          return (
            <li>
              <button type='button' onClick={handleSelectClick(item)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </SelectFilterStyle>
  );
}
