import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { useFollowerQuery, useFollowingQuery } from '../hook/useFollow';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1246px) {
    margin-left: 60px;
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
  }
`;

export default function Follow() {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const [follower, isFollowerLoading, isFollowerError] = useFollowerQuery(id);
  const [following, isFollowingLoading, isFollowingError] =
    useFollowingQuery(id);

  return (
    <>
      <Header text />
      <MainStyle>
        {path === 'follower'
          ? !isFollowerLoading && <Followers follower={follower} />
          : !isFollowingLoading && <Followings following={following} />}
      </MainStyle>
      <NavBar />
    </>
  );
}
