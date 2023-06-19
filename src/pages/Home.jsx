import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import { BrowserRouter, Link } from 'react-router-dom';
import logoblue from '../assets/logo/logo-blue.svg';
import MButton from '../components/Common/Button/MButton';
import Router from '../routes/Router';
import { GET_API } from '../api/CommonAPI';
import PostList from '../components/Post/PostList';

const EmptySection = styled.section`
  width: 100%;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .emptyMessage {
    background: url(${logoblue}) no-repeat;
    color: var(--color-steelblue);
    background-position: top;
    padding-top: 115px;
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    margin: 0 auto;
  }
`;

const FullSection = styled.section`
  padding: 70px 0;
`;

// 빈화면
function Empty() {
  return (
    <>
      {/* <Header main /> */}
      <EmptySection>
        <p className='emptyMessage'>유저 또는 팀을 검색해 팔로우 해보세요!</p>
        <MButton
          text='검색하기'
          func={() => {
            alert('/search');
          }}
        />
      </EmptySection>
      {/* <NavBar /> */}
    </>
  );
}

export default function Home(props) {
  const [feed, setFeed] = useState([]);
  const url = '/post/feed';
  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const getData = async () => {
      const data = await GET_API(test_token, url);
      setFeed(data);
    };
    getData();
  }, []);
  console.log(feed);
  return (
    <>
      <Header main />
      <FullSection>
        {feed.length === 0 && <Empty />}
        {feed.posts?.length > 0 && <PostList post={feed} />}
      </FullSection>
      <NavBar />
    </>
  );
}
