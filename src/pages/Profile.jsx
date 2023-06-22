import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';
import { UserProfile, MyProfile } from '../components/Profile/UserProfile';
import TeamProfile from '../components/Profile/TeamProfile';
import NavBar from '../components/Common/NavBar';
import { getProfileAPI } from '../api/ProfileAPI';
import { useRecoilState } from 'recoil';
import { accountname, userToken } from '../atom/loginAtom';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  background: var(--color-bg);
  height: 100vh;
`;

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const { id } = useParams();
  const isTeam = id.startsWith('SPORT_');
  const [username, setUsername] = useRecoilState(accountname);
  const [token, setToken] = useRecoilState(userToken);

  useEffect(() => {
    const getProfile = async () => {
      const data = await getProfileAPI(token, id);
      setProfile(data.profile);
    };
    getProfile();
  }, [id]);
  return (
    <>
      <Header text />
      <MainStyle>
        {isTeam
          ? profile.length !== 0 && <TeamProfile profile={profile} />
          : profile.length !== 0 &&
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
