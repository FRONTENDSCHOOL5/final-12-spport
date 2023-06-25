import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';
import { useRecoilState } from 'recoil';
import { userToken, accountname } from '../../atom/loginAtom';
import PostList from '../Post/PostList';
import { followAPI, unfollowAPI } from '../../api/FollowAPI';
import { getProductAPI } from '../../api/AddProductAPI';
import { getUserPostAPI } from '../../api/ProfileAPI';

const LikedGameStyle = styled.section`
  background: white;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  h2 {
    padding: 20px 20px 0;
  }
  ul {
    overflow-x: scroll;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);
`;

function UserProfile({ profile }) {
  const { id } = useParams();
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [planGame, setPlanGame] = useState([]);

  const handleState = async () => {
    if (isFollow) {
      const data = await unfollowAPI(token, id);
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    } else {
      const data = await followAPI(token, id);
      setIsFollow(data.profile.isfollow);
      setNumFollower(data.profile.followerCount);
    }
  };

  useEffect(() => {
    const getLikedGameData = async () => {
      const plan = await getProductAPI(token, id);
      setPlanGame(plan);
    };

    // const getPostData = async () => {
    //   const data = await getPost(token, id);
    //   setPostData(data.post);
    // };
    getLikedGameData();
    // getPostData();
  }, []);

  return (
    <Container>
      <CommonProfile profile={profile} numFollower={numFollower}>
        <button type='button'>
          <img src={IconShareBtn} alt='공유' />
        </button>
        <MButton
          text={isFollow ? '언팔로우' : '팔로우'}
          func={handleState}
          active={isFollow}
        />
        <button
          type='button'
          onClick={() => {
            navigate(`/chat/${id}`);
          }}
        >
          <img src={IconMessageBtn} alt='공유' />
        </button>
      </CommonProfile>
      <LikedGameStyle className='section-game'>
        <h2>직관 일정</h2>
        {planGame.length > 0 && <CardList games={planGame} />}
      </LikedGameStyle>

      <PostList post={postData} onlyGame={false} />
    </Container>
  );
}

function MyProfile({ profile }) {
  const navigate = useNavigate();
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [postData, setPostData] = useState([]);
  const [planGame, setPlanGame] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const [accountName, setAccountName] = useRecoilState(accountname);

  useEffect(() => {
    const getLikedGameData = async () => {
      const plan = await getProductAPI(token, accountName);
      setPlanGame(plan);
    };
    const getPostData = async () => {
      const data = await getUserPostAPI(token, accountName);
      setPostData(data.post);
    };
    getLikedGameData();
    getPostData();
  }, []);
  return (
    <Container>
      <CommonProfile profile={profile} numFollower={numFollower}>
        <MButton
          text='프로필 수정'
          func={() => {
            navigate('/edit');
          }}
          active
        />
        <MButton
          text='일정 추가'
          func={() => {
            navigate('/addgame');
          }}
          active
        />
      </CommonProfile>

      <LikedGameStyle className='section-game'>
        <h2>직관 일정</h2>
        {planGame.length > 0 && <CardList games={planGame} />}
      </LikedGameStyle>
      <PostList post={postData} onlyGame={false} />
    </Container>
  );
}

export { UserProfile, MyProfile };
