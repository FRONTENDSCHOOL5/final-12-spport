import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isModalOpen } from '../../../atom/modalAtom';

const ModalStyle = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 390px;
  height: 100vh;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  .modal-wrapper {
    position: fixed;
    width: 252px;
    background-color: var(--color-navy);
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    p {
      padding: 24px 24px;
      color: #fff;
    }
    & .btn-group {
      border-top: 1px solid var(--color-lightgrey);
      display: flex;
    }
    button {
      padding: 14px 0;
      width: 100%;
      font-size: 14px;
      color: #fff;
      &:active,
      &:hover {
        background: var(--color-steelblue);
        color: var(--color-lime);
      }
      &:nth-child(2) {
        border-left: 1px solid var(--color-lightgrey);
        color: var(--color-lime);
      }
    }
  }
`;
// title, btnText, onYesClick
export default function Modal({ items }) {
  const [modalOpen, setModalOpen] = useRecoilState(isModalOpen);
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const btnCancel = document.querySelector('.btn-cancel');
    const btnYes = document.querySelector('.btn-yes');
    if (modalOpen) {
      btnCancel.focus();
      console.log(document.activeElement);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (document.activeElement === btnYes) {
            e.preventDefault();
            btnCancel.focus();
          } else if (document.activeElement === btnCancel && e.shiftKey) {
            e.preventDefault();
            btnYes.focus();
          }
        }
      });
    }
  }, []);

  return (
    <ModalStyle onClick={closeModal}>
      <div className='modal-wrapper'>
        <p>{items[0]}</p>
        <div className='btn-group'>
          <button className='btn-cancel' type='button'>
            취소
          </button>
          <button className='btn-yes' type='button' onClick={items[2]}>
            {items[1]}
          </button>
        </div>
      </div>
    </ModalStyle>
  );
}
