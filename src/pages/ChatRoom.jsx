import React, { useState } from 'react';
import Header from '../components/Common/Header/Header';
import { InputCommentStyle } from '../components/Comment/InputComment';
import styled from 'styled-components';
import { ImageButton } from '../components/Common/Button/ImageButton';
import { ProfileImage42 } from '../components/Common/ProfileImage';
import ChatImage from '../assets/image/default-profile.png';
import useAuth from '../hooks/useAuth';

export default function ChatRoom() {
  const { username } = useAuth();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('전송', inputValue);
    setInputValue('');
  };

  const isButtonActive = inputValue !== '';

  return (
    <>
      <Header text={username} isChatRoom={true} />
      <MessageList>
        <li>
          <ProfileImage42 />
          <ChatMessage>
            <p>
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </p>
            <span>12:39</span>
          </ChatMessage>
        </li>
        <li>
          <ProfileImage42 />
          <ChatMessage>
            <p>이번에 06/13 직관 가시는 건가요???</p>
            <span>12:41</span>
          </ChatMessage>
        </li>
        <MyChatContainer>
          <MyChatMessage>
            <span>12:50</span>
            <p>고민중이네요.</p>
          </MyChatMessage>
        </MyChatContainer>
        <MyChatContainer>
          <MyChatMessage>
            <span>12:51</span>
            <img src={ChatImage} alt='' />
          </MyChatMessage>
        </MyChatContainer>
      </MessageList>
      <InputCommentStyle onSubmit={handleSubmit}>
        <ImageButton />
        <label htmlFor='inpComment' className='a11y-hidden'>
          메시지를 입력해주세요.
        </label>
        <Input
          type='text'
          id='inpComment'
          placeholder='메시지 입력하기...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <ButtonSubmit type='submit' active={isButtonActive}>
          전송
        </ButtonSubmit>
      </InputCommentStyle>
    </>
  );
}

const MessageList = styled.ul`
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg);
  padding: 0 0 80px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  li {
    display: flex;
    div {
      margin-left: 16px;
    }
  }
`;

const Input = styled.input`
  padding: 10px 0;
  width: 270px;
  outline: none;
  font-size: 14px;
  color: var(--color-navy);
  &::placeholder {
    color: var(--color-maingrey);
  }
`;

const ButtonSubmit = styled.button`
  color: ${({ active }) =>
    active ? 'var(--color-navy)' : 'var(--color-maingrey)'};
  font-size: 14px;
`;

const ChatMessage = styled.div`
  display: flex;
  gap: 10px;
  p {
    background-color: #fff;
    border: 1px solid var(--color-maingrey);
    border-radius: 0 10px 10px 10px;
    max-width: 240px;
    height: fit-content;
    padding: 10px;
    color: var(--color-navy);
    font-size: 14px;
    line-height: 17px;
  }
  span {
    font-size: 10px;
    color: var(--color-darkgrey);
    align-self: flex-end;
  }
`;

const MyChatMessage = styled(ChatMessage)`
  p {
    background-color: var(--color-navy);
    border-radius: 10px 0 10px 10px;
    color: #fff;
  }

  img {
    max-width: 269px;
    max-height: 240px;
    border-radius: 10px;
  }
`;

const MyChatContainer = styled.li`
  margin-left: auto;
  align-self: flex-end;
  margin-right: 16px;
`;
