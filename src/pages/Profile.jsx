import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';
import MyProfile from '../components/Profile/MyProfile';
import UserProfile from '../components/Profile/UserProfile';
import TeamProfile from '../components/Profile/TeamProfile';
import NavBar from '../components/Common/NavBar';
import { getProfileAPI } from '../api/ProfileAPI';
import { useRecoilState } from 'recoil';
import { accountname, userToken } from '../atom/loginAtom';
import UserProfileLoader from '../components/Skeleton/UserProfileLoader';
import TeamProfileLoader from '../components/Skeleton/TeamProfileLoader';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  background: var(--color-bg);
  /* height: 100vh; */
`;

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const { id } = useParams();
  const isTeam = id.startsWith('SPORT_');
  const [username, setUsername] = useRecoilState(accountname);
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      setIsLoad(true);
      const data = await getProfileAPI(token, id);
      if (data.status === '404') {
        navigate('/error');
      }
      setProfile(data.profile);
      setIsLoad(false);
    };
    getProfile();
  }, [id]);
  return (
    <>
      <Header text />
      <MainStyle>
        {isLoad && isTeam && <TeamProfileLoader />}
        {!isLoad && isTeam && profile.length !== 0 && (
          <TeamProfile profile={profile} />
        )}
        {isLoad && !isTeam && <UserProfileLoader />}
        {!isLoad &&
          !isTeam &&
          profile.length !== 0 &&
          (username === profile.accountname ? (
            <MyProfile profile={profile} />
          ) : (
            <UserProfile profile={profile} />
          ))}
      </MainStyle>
      <NavBar />
    </>
  );
}
