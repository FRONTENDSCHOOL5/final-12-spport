import React from 'react';
import styled from 'styled-components';
import imgProfile from '../../assets/image/default-profile.png';

const InputCommentStyle = styled.form`
  border: 1px solid black;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid var(--color-maingrey);
  .img-profile {
    width: 36px;
    border-radius: 50px;
    border: 0.5px solid var(--color-steelblue);
  }
  .inp-comment {
    width: 100%;
    font-size: 14px;
    padding: 6px;
    &::placeholder {
      color: var(--color-maingrey);
    }
  }
  .btn-comment {
    width: 35px;
    font-size: 14px;
  }
`;

export default function InputComment() {
  return (
    <InputCommentStyle>
      <img className='img-profile' src={imgProfile} />
      <h2></h2>
      <label htmlFor='inpComment' className='a11y-hidden'></label>
      <input
        id='inpComment'
        className='inp-comment'
        type='text'
        placeholder='댓글 입력하기...'
      />
      <button className='btn-comment'>게시</button>
    </InputCommentStyle>
  );
}
