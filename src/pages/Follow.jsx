import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { useProfileQuery } from '../hooks/useProfile';

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
  const { profile, isProfileLoading, isProfileError } = useProfileQuery(id);

  useEffect(() => {
    if (isProfileError) {
      navigate('/error');
    }
  }, [isProfileError]);

  return (
    <>
      <Header text={path === 'follower' ? 'followers' : 'followings'} />
      <MainStyle>
        {path === 'follower'
          ? !isProfileLoading && (
              <Followers id={id} count={profile.profile.followerCount} />
            )
          : !isProfileLoading && (
              <Followings id={id} count={profile.profile.followingCount} />
            )}
      </MainStyle>
    </>
  );
}
