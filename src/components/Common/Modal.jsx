import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  width: 252px;
  height: 110px;
  background-color: var(--color-navy);
  color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding-top: 24px;
  gap: 23px;
  text-align: center;

  & .btn-group {
    border-top: 1px solid var(--color-lightgrey);
    display: flex;
  }

  button {
    color: inherit;
    height: 46px;
    width: 100%;
    font-size: 14px;

    &:active {
      color: var(--color-lime);
    }

    &:nth-child(2) {
      border-left: 1px solid var(--color-lightgrey);
    }
  }
`;

export default function Modal({ title, btnRight }) {
  return (
    <ModalStyle>
      <div>{title}</div>
      <div className='btn-group'>
        <button className='btn-left' type='button'>
          취소
        </button>
        <button className='btn-right' type='button'>
          {btnRight}
        </button>
      </div>
    </ModalStyle>
  );
}
