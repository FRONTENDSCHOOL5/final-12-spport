import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImage36 } from '../Common/ProfileImage';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userimage } from '../../atom/loginAtom';
import { useAddCommentMutation } from '../../hooks/useComment';

export const InputCommentStyle = styled.form`
  position: fixed;
  bottom: 60px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 0.5px solid var(--color-maingrey);
  background: white;
  width: 100%;

  .inp-comment {
    width: calc(100% - 100px);
    font-size: 14px;
    padding: 6px;
    &::placeholder {
      color: var(--color-maingrey);
    }
  }
  .btn-comment {
    width: 35px;
    font-size: 14px;
    &:disabled {
      color: var(--color-maingrey);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1247px) {
    margin-left: 60px;
    bottom: 0;

    .inp-comment {
      width: calc(100% - 160px);
    }

    .btn-comment {
      width: 100px;
      text-align: left;
    }
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
    bottom: 0;

    .inp-comment {
      width: calc(100% - 260px);
    }

    .btn-comment {
      width: 240px;
      text-align: left;
    }
  }
`;

export default function InputComment() {
  const { id } = useParams();
  const [inputVal, setInputVal] = useState('');
  const [userImage, setUserImage] = useRecoilState(userimage);
  const addCommentMutate = useAddCommentMutation(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCommentMutate.mutateAsync(inputVal);
    setInputVal('');
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <InputCommentStyle onSubmit={handleSubmit}>
      <ProfileImage36 image={userImage} />
      <label htmlFor='inpComment' className='a11y-hidden'>
        댓글을 입력해주세요
      </label>
      <input
        id='inpComment'
        className='inp-comment'
        type='text'
        placeholder='댓글 입력하기...'
        onChange={handleInputChange}
        value={inputVal}
      />
      {inputVal ? (
        <button className='btn-comment'>게시</button>
      ) : (
        <button className='btn-comment' disabled>
          게시
        </button>
      )}
    </InputCommentStyle>
  );
}
