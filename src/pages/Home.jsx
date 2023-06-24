import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import { GET_API } from '../api/CommonAPI';
import PostList from '../components/Post/PostList';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';
import Empty from '../components/Common/Empty';

const FullSection = styled.main`
  padding: 50px 0 0;
  height: 100%;
  background: white;
`;

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
        {feed.length === 0 ? (
          <Empty
            message='유저 또는 팀을 검색해 팔로우 해보세요!'
            btnText='검색하기'
            link='/search'
          />
        ) : (
          <PostList post={feed} onlyGame={filterClick} />
        )}
      </FullSection>
      <NavBar page='홈' />
    </>
  );
}
