import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BottomSheetStyle = styled.article`
  width: 390px;
  margin: 100px;
  background: white;
  box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px 10px 0 0;
  button {
    width: 100%;
    padding: 14px 26px;
    color: var(--color-navy);
    font-size: 14px;
    text-align: start;
    &:hover {
      background-color: var(--color-bg);
    }
  }
  .btn-header {
    text-align: center;
    span {
      display: inline-block;
      background-color: var(--color-maingrey);
      width: 50px;
      height: 4px;
      border-radius: 5px;
    }
    &:hover {
      background-color: white;
    }
  }
`;

// https://velog.io/@boris0716/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-Bottom-Sheet-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9E%91%EC%84%B1%EC%A4%91
export default function BottomSheet({ items }) {
  return (
    <BottomSheetStyle>
      <button className='btn-header'>
        <span></span>
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <button>{item}</button>
            </li>
          );
        })}
      </ul>
    </BottomSheetStyle>
  );
}
