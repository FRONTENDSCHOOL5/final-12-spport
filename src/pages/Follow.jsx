import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';
import { useFollowerQuery, useFollowingQuery } from '../hook/useFollow';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  height: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`;

export default function Follow() {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const [token, setToken] = useRecoilState(userToken);
  const [follower, isFollowerLoading, isFollowerError] = useFollowerQuery(token, id);
  const [following, isFollowingLoading, isFollowingError] = useFollowingQuery(token, id);
  
  return (
    <>
      <Header text />
      <MainStyle>
        {path === 'follower'
          ? !isFollowerLoading && (
              <Followers follower={follower} token={token} />
            )
          : !isFollowingLoading && (
              <Followings following={following} token={token} />
            )}
      </MainStyle>
      <NavBar />
    </>
  );
}
