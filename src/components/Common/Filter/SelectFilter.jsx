import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import iconToggle from '../../../assets/image/icon-toggle.svg';
import classnames from 'classnames';

const SelectFilterStyle = styled.div`
  position: relative;
  width: 113px;
  text-align: center;
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
      transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
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
    display: none;
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
  .list-select.on {
    display: block;
  }
`;

export default function SelectFilter({
  type,
  items,
  selectItem,
  setSelectItem,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterClick, setFilterClick] = useState(false);
  const handleFilterClick = (e) => {
    setFilterClick((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  const handleSelectClick = (e) => {
    setSelectItem(e.target.textContent);
    setFilterClick(false);
    setIsOpen(false);
  };

  useEffect(() => {
    items.unshift('전체');
  }, []);

  return (
    <SelectFilterStyle className='select-filter' isOpen={isOpen}>
      <button className='btn-select' type='button' onClick={handleFilterClick}>
        {selectItem === '선택' ? `${type} 선택` : selectItem}
      </button>
      <ul className={classnames('list-select', filterClick && 'on')}>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <button type='button' onClick={handleSelectClick}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </SelectFilterStyle>
  );
}
