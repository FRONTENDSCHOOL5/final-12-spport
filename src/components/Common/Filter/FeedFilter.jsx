import React, { useState } from 'react';
import styled from 'styled-components';

const FeedFilterStyle = styled.div`
  .inp-feedFilter {
    display: none;
  }
  .toggle-track {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 22px;
    font-size: 10px;
    color: var(--color-navy);
    padding: 5px 6px;
    background: var(--color-bg);
    border-radius: 50px;
  }
  .toggle-track:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    background: var(--color-lime);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    transition: left 0.2s;
  }
  .inp-feedFilter + label .toggle-track:after {
    content: '일정 피드만';
    display: inline-block;
    position: absolute;
    right: 8px;
    margin-top: 1px;
  }
  .inp-feedFilter:checked + label .toggle-track:before {
    left: 60px;
  }
  .inp-feedFilter:checked + label .toggle-track:after {
    content: '전체 피드';
    left: 8px;
  }
`;

export default function FeedFilter() {
  const [filterClick, setFilterClick] = useState(false);
  const handleFeedFilterChange = () => {
    setFilterClick((prev) => !prev);
  };
  return (
    <FeedFilterStyle className='feed-toggle'>
      <input
        id='inpFeedFilter'
        className='inp-feedFilter'
        role='switch'
        type='checkbox'
        onChange={handleFeedFilterChange}
      />
      <label htmlFor='inpFeedFilter'>
        <span className='toggle-track'></span>
      </label>
    </FeedFilterStyle>
  );
}
