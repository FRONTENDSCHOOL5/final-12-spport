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

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
  }
`;

const SkipNavStyle = styled.div`
  a {
    z-index: 99999;
    position: absolute;
    top: -50px;
    left: 0;
    background: #000;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    padding: 0 15px;
    font-weight: bolder;
  }
  a:focus,
  a:active {
    top: 0;
  }
`;

export default function Profile() {
  const { id } = useParams();
  const isTeam = id.startsWith('SPORT_');
  const [username, setUsername] = useRecoilState(accountname);
  const navigate = useNavigate();
  const { profile, isProfileLoading, isProfileError, profileRefetch } =
    useProfileQuery(id);
  const { post, isPostLoading, isPostError, postRefetch } = isTeam
    ? useTeamPostQuery(id)
    : useUserPostQuery(id);

  useEffect(() => {
    if (!isPostLoading) {
      profileRefetch();
    }
    if (!isPostLoading) {
      postRefetch();
    }
  }, [id]);

  console.log(isPostLoading, post);

  return (
    <>
      <SkipNavStyle>
        <a href='#profile'>프로필 바로가기</a>
        <a href={isTeam ? '#player' : '#game-schedule'}>
          {isTeam ? '선수 보러가기' : '직관 일정 바로가기'}
        </a>
        <a href={isTeam ? '#games' : '#feed'}>
          {isTeam ? '경기 일정 바로가기' : '게시글 바로가기'}
        </a>
        <a href='#nav-홈'>네비게이션바 바로가기</a>
      </SkipNavStyle>
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
