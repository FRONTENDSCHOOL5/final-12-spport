import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { isBottomSheetOpen } from '../../../atom/bottomSheetAtom';
import { useState } from 'react';

const animation = css`
  @keyframes slideOn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes slideOff {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

const BsAnimationStyle = styled.div`
  ${animation}
  &.up {
    animation: slideOn 0.5s ease-in-out 0s 1 normal forwards;
  }
  &.down {
    animation: slideOff 0.5s ease-in-out 0s 1 normal forwards;
  }
`;

const BottomSheetStyle = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
  .bottomsheet {
    width: 100%;
    background: var(--color-navy);
    box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    padding-bottom: 10px;
    /* animation: slideOn 0.5s ease-in-out 0s 1 normal forwards; */
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

export default function BottomSheet({ items }) {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [effect, setEffect] = useState('up');
  const closeBottomSheet = () => {
    if (isBsOpen) {
      setEffect('down');
      setTimeout(() => {
        setIsBsOpen(false);
      }, 500);
    }
  };
  return (
    <BottomSheetStyle onClick={closeBottomSheet}>
      <BsAnimationStyle className={`bottomsheet ${effect}`}>
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
      </BsAnimationStyle>
    </BottomSheetStyle>
  );
}
