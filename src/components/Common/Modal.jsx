import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  width: 252px;
  background-color: var(--color-navy);
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  p {
    padding: 24px 0;
  }
  & .btn-group {
    border-top: 1px solid var(--color-lightgrey);
    display: flex;
  }
  button {
    color: inherit;
    padding: 14px 0;
    width: 100%;
    font-size: 14px;
    &:active,
    &:hover {
      color: var(--color-lime);
    }
    &:nth-child(2) {
      border-left: 1px solid var(--color-lightgrey);
    }
  }
`;

export default function Modal({ title, btnText, onYesClick }) {
  return (
    <ModalStyle>
      <p>{title}</p>
      <div className='btn-group'>
        <button className='btn-cancel' type='button'>
          취소
        </button>
        <button className='btn-yes' type='button' onClick={onYesClick}>
          {btnText}
        </button>
      </div>
    </ModalStyle>
  );
}
