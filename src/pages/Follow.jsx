import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { getFollowersAPI, getFollowingsAPI } from '../api/FollowAPI';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  height: 100vh;
`;

export default function Follow() {
  const { id } = useParams();
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const location = useLocation();
  const path = location.pathname.split('/')[3];

  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const getFollowers = async () => {
      const data = await getFollowersAPI(test_token, id);
      setFollower(data);
    };
    const getFollowings = async () => {
      const data = await getFollowingsAPI(test_token, id);
      setFollowing(data);
    };
    getFollowers();
    getFollowings();
  }, []);

  return (
    <>
      <Header text />
      <MainStyle>
        {path === 'follower'
          ? follower.length !== 0 && <Followers follower={follower} />
          : following.length !== 0 && <Followings following={following} />}
      </MainStyle>
      <NavBar />
    </>
  );
}
