import React from 'react';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import { ProfileImage42 } from '../components/Common/ProfileImage';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Chat() {
  const navigate = useNavigate();
  const handleChatClick = () => {
    navigate('/chat/:id');
  };
  return (
    <>
      <Header text />
      <ChatList>
        <ChatItem onClick={handleChatClick}>
          <ProfileImage42 />
          <ChatItemContent>
            <strong>리라이온</strong>
            <div>
              <p>이번에 06/13 직관 가시는 건가요???</p>
              <span>2023.06.10</span>
            </div>
          </ChatItemContent>
        </ChatItem>
        <ChatItem onClick={handleChatClick}>
          <ProfileImage42 />
          <ChatItemContent>
            <strong>데데롯데</strong>
            <div>
              <p>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지고스트</p>
              <span>2023.06.10</span>
            </div>
          </ChatItemContent>
        </ChatItem>
        <ChatItem onClick={handleChatClick}>
          <ProfileImage42 />
          <div>
            <strong>오직 야구 외길</strong>
            <div>
              <p>내 차는 내가 평가한다. 오픈 이벤트에 참여 하시겠습니까?</p>
              <span>2023.06.10</span>
            </div>
          </div>
        </ChatItem>
      </ChatList>
      <NavBar />
    </>
  );
}

const ChatList = styled.ul`
  padding: 72px 12px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  strong {
    font-size: 14px;
    color: var(--color-navy);
    font-weight: bold;
  }

  p {
    font-size: 12px;
    color: var(--color-steelblue);
    margin-top: 6px;
    width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 10px;
    color: var(--color-maingrey);
    float: right;
  }
`;

const ChatItem = styled.li`
  display: flex;
  gap: 8px;
  & div div {
    display: flex;
    align-items: end;
  }
`;

const ChatItemContent = styled.div`
  position: relative;
  z-index: 1;

  div {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    width: 12px;
    height: 12px;
    background-color: var(--color-navy);
    border-radius: 50%;
    z-index: 0;
  }
`;
