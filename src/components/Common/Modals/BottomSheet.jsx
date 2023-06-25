import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isBottomSheetOpen } from '../../../atom/bottomSheetAtom';

const BottomSheetStyle = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 390px;
  margin: auto;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  .bottomsheet {
    width: 390px;
    background: var(--color-navy);
    box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    padding-bottom: 10px;
    z-index: 10;
    button {
      width: 100%;
      padding: 14px 26px;
      color: var(--color-lime);
      font-size: 14px;
      text-align: start;
      &:hover {
        background-color: var(--color-steelblue);
      }
    }
    .btn-header {
      text-align: center;
      border-radius: 20px 20px 0 0;
      span {
        display: inline-block;
        border-radius: 5px;
        background-color: var(--color-lime);
        width: 50px;
        height: 4px;
      }
      &:hover {
        background-color: var(--color-steelblue);
      }
    }
  }
`;

// https://seo-tory.tistory.com/73
export default function BottomSheet({ items }) {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const closeBottomSheet = () => {
    setIsBsOpen(false);
  };
  return (
    <BottomSheetStyle onClick={closeBottomSheet}>
      <div className='bottomsheet'>
        <button className='btn-header'>
          <span></span>
        </button>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <button onClick={item[1]}>{item[0]}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </BottomSheetStyle>
  );
}
