import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';
import MyProfile from '../components/Profile/MyProfile';
import UserProfile from '../components/Profile/UserProfile';
import TeamProfile from '../components/Profile/TeamProfile';
import NavBar from '../components/Common/NavBar';
import {
  useProfileQuery,
  useTeamPostQuery,
  useUserPostQuery,
} from '../hook/useProfile';
import { useRecoilState } from 'recoil';
import { accountname } from '../atom/loginAtom';
import UserProfileLoader from '../components/Skeleton/UserProfileLoader';
import TeamProfileLoader from '../components/Skeleton/TeamProfileLoader';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  background: var(--color-bg);
`;

export default function Profile() {
  const { id } = useParams();
  const isTeam = id.startsWith('SPORT_');
  const [username, setUsername] = useRecoilState(accountname);
  const navigate = useNavigate();
  const [profile, isProfileLoading, isProfileError, profileRefetch] =
    useProfileQuery(id);
  const [post, isPostLoading, isPostError, postRefetch] = isTeam
    ? useTeamPostQuery(id)
    : useUserPostQuery(id);

  useEffect(() => {
    profileRefetch();
    postRefetch();
  }, [id]);

  return (
    <>
      <Header text />
      <MainStyle>
        {/* {isProfileError && <Error/>} */}
        {isProfileLoading && isTeam && <TeamProfileLoader />}
        {!isProfileLoading &&
          !isPostLoading &&
          isTeam &&
          profile.profile.length !== 0 && (
            <TeamProfile profile={profile.profile} game={post} />
          )}
        {isProfileLoading && !isTeam && <UserProfileLoader />}
        {!isProfileLoading &&
          !isPostLoading &&
          !isTeam &&
          profile.profile.length !== 0 &&
          (username === profile.profile.accountname ? (
            <MyProfile profile={profile.profile} post={post.post} />
          ) : (
            <UserProfile profile={profile.profile} post={post.post} />
          ))}
      </MainStyle>
      <NavBar />
    </>
  );
}
