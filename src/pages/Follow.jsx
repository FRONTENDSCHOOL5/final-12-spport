import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { useFollowerQuery, useFollowingQuery } from '../hooks/useFollow';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1246px) {
    margin-left: 60px;
    padding-top: 0;
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
    padding-top: 0;
  }
`;

export default function Follow() {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const navigate = useNavigate();
  const { follower, isFollowerLoading, isFollowerError } = useFollowerQuery(id);
  const { following, isFollowingLoading, isFollowingError } =
    useFollowingQuery(id);

  useEffect(() => {
    if (isFollowerError || isFollowingError) {
      navigate('/error');
    }
  }, [isFollowerError, isFollowingError]);

  return (
    <>
      <Header text={path === 'follower' ? 'followers' : 'followings'} />
      <MainStyle>
        {path === 'follower'
          ? !isFollowerLoading && <Followers follower={follower} />
          : !isFollowingLoading && <Followings following={following} />}
      </MainStyle>
    </>
  );
}
