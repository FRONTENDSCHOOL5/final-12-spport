import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import logoblue from '../assets/logo/logo-blue.svg';
import MButton from '../components/Common/Button/MButton';
import { GET_API } from '../api/CommonAPI';
import PostList from '../components/Post/PostList';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/atom';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <EmptySection>
      <p className='emptyMessage'>유저 또는 팀을 검색해 팔로우 해보세요!</p>
      <MButton
        text='검색하기'
        func={() => {
          navigate('/search');
        }}
      />
    </EmptySection>
  );
}

export default function Home(props) {
  const [feed, setFeed] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const [filterClick, setFilterClick] = useState(false);
  const url = '/post/feed/?limit=1000';

  useEffect(() => {
    const getData = async () => {
      const data = await GET_API(token, url);
      setFeed(data.posts);
    };
    getData();
  }, []);

  return (
    <>
      <Header main setFilterClick={setFilterClick} />
      <FullSection>
        {feed.length === 0 && <Empty />}
        {feed.length > 0 && <PostList post={feed} onlyGame={filterClick} />}
      </FullSection>
      <NavBar />
    </>
  );
}
