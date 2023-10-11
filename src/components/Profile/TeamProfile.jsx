import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import styled from 'styled-components';
import MButton from '../Common/Button/MButton';
import GameList from '../List/GameList';
import { useFollowMutation, useUnfollowMutation } from '../../hooks/useFollow';

const SectionGameStyle = styled.section`
  background: white;
  padding-bottom: 60px;
  h2 {
    border-bottom: 0.5px solid var(--color-maingrey);
    padding: 12px 20px;
  }
  ul {
    padding: 20px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);

  @media screen and (min-width: 768px) and (max-width: 1246px) {
    margin-left: 60px;
  }
`;

const BtnPlayer = styled.button`
  background-color: #fff;
  padding: 12px 0;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  &:not(:disabled):hover {
    background-color: var(--color-lime);
    color: var(--color-navy);
  }
`;

export default function TeamProfile({ profile, game }) {
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const { id } = useParams();
  const navigate = useNavigate();
  const followMutate = useFollowMutation(id);
  const unfollowMutate = useUnfollowMutation(id);

  const handleState = async () => {
    if (isFollow) {
      const data = await unfollowMutate.mutateAsync();
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    } else {
      const data = await followMutate.mutateAsync();
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    }
  };

  const handlePlayerList = () => {
    navigate('player');
  };

  return (
    <>
      <Container>
        <h1 className='a11y-hidden'>{profile.username}님의 프로필 페이지</h1>
        <CommonProfile profile={profile} numFollower={numFollower}>
          <MButton
            text={isFollow ? '언팔로우' : '팔로우'}
            func={handleState}
            active={isFollow}
          />
        </CommonProfile>
        <BtnPlayer id='player' onClick={handlePlayerList}>
          선수보러가기
        </BtnPlayer>
        <SectionGameStyle id='games' className='section-game'>
          <h2>경기 일정</h2>
          <GameList games={game} />
        </SectionGameStyle>
      </Container>
    </>
  );
}
