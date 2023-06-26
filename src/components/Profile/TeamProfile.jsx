import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import styled from 'styled-components';
import MButton from '../Common/Button/MButton';
import GameList from '../List/GameList';
import { getGameInfoByTeam } from '../../api/GameAPI/TeamProfileGameAPI';
import { useRecoilState } from 'recoil';
import { userToken } from '../../atom/loginAtom';
import { followAPI, unfollowAPI } from '../../api/FollowAPI';

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

export default function TeamProfile({ profile }) {
  const [state, setState] = useState(false);
  const [game, setGame] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleState = async () => {
    if (isFollow) {
      const data = await unfollowAPI(token, id);
      console.log(data);
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    } else {
      const data = await followAPI(token, id);
      console.log(data);
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    }
  };
  // 팀프로필에 url SPORT_BS 빼주기 API에 추가 `SPORT_${accountname}`
  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };

    getData();
  }, []);

  const handlePlayerList = () => {
    navigate('player');
  };

  return (
    <>
      <Container>
        <CommonProfile profile={profile} numFollower={numFollower}>
          <MButton
            text={isFollow ? '언팔로우' : '팔로우'}
            func={handleState}
            active={isFollow}
          />
        </CommonProfile>
        <BtnPlayer onClick={handlePlayerList}>선수보러가기</BtnPlayer>
        <SectionGameStyle className='section-game'>
          <h2>경기 일정</h2>
          <GameList games={game} />
        </SectionGameStyle>
      </Container>
    </>
  );
}
