import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import Followers from '../components/Follow/Followers';
import Followings from '../components/Follow/Followings';
import { getFollowersAPI, getFollowingsAPI } from '../api/FollowAPI';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  height: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`;

export default function Follow() {
  const { id } = useParams();
  // 팔로워 리스트
  const [follower, setFollower] = useState([]);
  // 팔로잉 리스트
  const [following, setFollowing] = useState([]);
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const [token, setToken] = useRecoilState(userToken);

  useEffect(() => {
    const getFollowers = async () => {
      const data = await getFollowersAPI(token, id);
      setFollower(data);
    };
    const getFollowings = async () => {
      const data = await getFollowingsAPI(token, id);
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
          ? follower.length !== 0 && (
              <Followers follower={follower} token={token} />
            )
          : following.length !== 0 && (
              <Followings following={following} token={token} />
            )}
      </MainStyle>
      <NavBar />
    </>
  );
}
