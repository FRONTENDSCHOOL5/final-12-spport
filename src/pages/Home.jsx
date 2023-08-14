import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import PostList from '../components/Post/PostList';
import Empty from '../components/Common/Empty';
import PostLoader from '../components/Skeleton/PostLoader';
import { useFeedQuery } from '../hook/usePost';

const FullSection = styled.main`
  padding: 50px 0 0;
  height: 100%;
  background: white;
`;

export default function Home(props) {
  const [filterClick, setFilterClick] = useState(false);
  const [feed, isFeedLoading, isFeedError] = useFeedQuery();

  return (
    <>
      <Header main setFilterClick={setFilterClick} />
      <FullSection>
        {isFeedError && (
          <Empty
            message='피드 정보를 가져오는데 실패했습니다.'
            btnText='새로고침'
            link='/home'
          />
        )}
        {!isFeedLoading && feed.posts.length === 0 && (
          <Empty
            message='유저 또는 팀을 검색해 팔로우 해보세요!'
            btnText='검색하기'
            link='/search'
          />
        )}
        {isFeedLoading ? (
          <PostLoader />
        ) : (
          <PostList post={feed.posts} onlyGame={filterClick} isHome />
        )}
      </FullSection>
      <NavBar page='홈' />
    </>
  );
}
