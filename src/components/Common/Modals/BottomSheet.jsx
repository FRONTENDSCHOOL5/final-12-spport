import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  isBottomSheetOpen,
  bottomSheetItems,
} from '../../../atom/bottomSheetAtom';
import { useState } from 'react';
import { createPortal } from 'react-dom';

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

export default function BottomSheet() {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [items] = useRecoilState(bottomSheetItems);
  const [effect, setEffect] = useState('up');
  const closeBottomSheet = () => {
    if (isBsOpen) {
      setEffect('down');
      setTimeout(() => {
        setIsBsOpen(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (isBsOpen) {
      setTimeout(() => {
        const elements = document.querySelectorAll(
          '[class*="bottomsheet"] > ul button, .btn-header',
        );
        elements[1].focus();
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === elements[0]) {
                e.preventDefault();
                elements[elements.length - 1].focus();
              }
            } else if (
              document.activeElement === elements[elements.length - 1]
            ) {
              e.preventDefault();
              elements[0].focus();
            }
          }
        });
      }, 501);
    }
  }, []);

  return createPortal(
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
    </BottomSheetStyle>,
    document.getElementById('modal-root'),
  );
}
