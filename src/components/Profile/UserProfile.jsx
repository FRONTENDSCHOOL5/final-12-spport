import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';
import IconCamera from '../../assets/image/icon-camera.svg';
import IconCalendar from '../../assets/image/icon-calendar.svg';
import { useRecoilState } from 'recoil';
import { userToken, accountname } from '../../atom/loginAtom';
import PostList from '../Post/PostList';
import { followAPI, unfollowAPI } from '../../api/FollowAPI';
import { getProductAPI } from '../../api/AddProductAPI';
import { getUserPostAPI } from '../../api/ProfileAPI';
import IconPostAlbumOff from '../../assets/image/icon-post-album-off.svg';
import IconPostAlbumOn from '../../assets/image/icon-post-album-on.svg';
import IconPostListOff from '../../assets/image/icon-post-list-off.svg';
import IconPostListOn from '../../assets/image/icon-post-list-on.svg';
import IconImageLayer from '../../assets/image/icon-img-layers.svg';

// 피드 게시글 없을 때 스타일
const NoPostStyle = styled.section`
  position: relative;
  background: white;
  height: 390px;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
      vertical-align: top;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 20px;
      font-weight: bolder;
    }
    button {
      margin-top: 20px;
    }
  }
`;

// 직관 일정 스타일
const LikedGameStyle = styled.section`
  position: relative;
  background: white;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  height: 205px;
  h2 {
    padding: 20px 20px 0;
    a {
      margin-left: 20px;
      font-size: 12px;
      color: var(--color-steelblue);
    }
  }
  ul {
    overflow-x: scroll;
  }

  /* 직관일정 없을 때 */
  & > div {
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font-size: 17px;
      font-weight: bold;
    }
    img {
      vertical-align: top;
      margin-bottom: 10px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);
`;
// 피드 스타일
const SectionFeed = styled.section`
  background-color: #fff;
  .feed-header {
    padding: 9px;
    border-top: 0.5px solid var(--color-maingrey);
    border-bottom: 0.5px solid var(--color-maingrey);
    overflow: hidden;

    .btns {
      float: right;
    }
    button {
      padding: 4px;
    }
    button + button {
      margin-left: 10px;
    }
    button img {
      vertical-align: top;
    }
  }
`;
// 앨범형 피드
const AlbumFeed = styled.ul`
  display: flex;
  gap: 8px;
  padding: 16px;
  flex-wrap: wrap;
  li {
    display: inline-block;
    width: 114px;
    height: 114px;
    border: 0.5px solid #c4c4c4;
    button {
      position: relative;
      width: 100%;
      height: 100%;
      .albumThumbnail {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        vertical-align: top;
      }
      div {
        position: absolute;
        top: 3px;
        right: 3px;
        width: 20px;
        height: 20px;
        background-image: url(${IconImageLayer});
      }
    }
  }
`;

function FeedHeader({ listType, setListType }) {
  return (
    <div className='feed-header'>
      <div className='btns'>
        {/* list button */}
        <button
          onClick={() => {
            setListType('list');
          }}
        >
          <img
            src={listType === 'list' ? IconPostListOn : IconPostListOff}
            alt='목록형 게시글 버튼'
          />
        </button>
        {/* album button */}
        <button
          onClick={() => {
            setListType('album');
          }}
        >
          <img
            src={listType === 'album' ? IconPostAlbumOn : IconPostAlbumOff}
            alt='앨범형 게시글 버튼'
          />
        </button>
      </div>
    </div>
  );
}

function UserProfile({ profile }) {
  const { id } = useParams();
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [planGame, setPlanGame] = useState([]);
  const [listType, setListType] = useState('list');
  const gameLink = '/schedule/' + profile.accountname;

  const handleFollow = async () => {
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
    const getPostData = async () => {
      const data = await getUserPostAPI(token, id);
      setPostData(data.post);
    };

    getLikedGameData();
    getPostData();
  }, []);
  console.log(postData);
  const albumPostData = postData.filter((item) => {
    return item.image;
  });
  console.log(albumPostData);

  return (
    <Container>
      {/* 상단 프로필 */}
      <CommonProfile profile={profile} numFollower={numFollower}>
        <button type='button'>
          <img src={IconShareBtn} alt='공유' />
        </button>
        <MButton
          text={isFollow ? '언팔로우' : '팔로우'}
          func={handleFollow}
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

      {/* 직관 일정 */}
      <LikedGameStyle className='section-game'>
        <h2>
          직관 일정 <Link to={gameLink}>전체보기</Link>
        </h2>
        {planGame.length === 0 ? (
          <div>
            <img src={IconCalendar} alt='' />
            <p>직관일정 없음</p>
          </div>
        ) : (
          <CardList games={planGame} />
        )}
      </LikedGameStyle>

      {/* 게시글 */}
      <SectionFeed>
        <FeedHeader listType={listType} setListType={setListType} />
        {listType === 'list' ? (
          // 리스트형
          postData.length === 0 ? (
            <NoPostStyle>
              <div>
                <img src={IconCamera} alt='' />
                <h2>게시물 없음</h2>
              </div>
            </NoPostStyle>
          ) : (
            <PostList post={postData} onlyGame={false} />
          )
        ) : // 앨범형
        albumPostData.length === 0 ? (
          <NoPostStyle>
            <div>
              <img src={IconCamera} alt='' />
              <h2>사진 게시물 없음</h2>
            </div>
          </NoPostStyle>
        ) : (
          <AlbumFeed>
            {albumPostData.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    type='button'
                    onClick={() => navigate(`/post/${item.id}`)}
                  >
                    <img
                      className='albumThumbnail'
                      src={item.image.split(',')[0]}
                      alt=''
                    />
                    {item.image.split(',').length > 1 && (
                      <div className='layer'></div>
                    )}
                  </button>
                </li>
              );
            })}
          </AlbumFeed>
        )}
      </SectionFeed>
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
  const [listType, setListType] = useState('list');
  const gameLink = '/schedule/' + profile.accountname;

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

  const albumPostData = postData.filter((item) => {
    return item.image;
  });
  return (
    <Container>
      {/* 상단 프로필 */}
      <CommonProfile profile={profile} numFollower={numFollower}>
        <MButton
          text='프로필 수정'
          func={() => {
            navigate('/editprofile');
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

      {/* 직관 일정 */}
      <LikedGameStyle className='section-game'>
        <h2>
          직관 일정 <Link to={gameLink}>전체보기</Link>
        </h2>
        {planGame.length === 0 ? (
          <div>
            <img src={IconCalendar} alt='' />
            <p>직관일정 없음</p>
          </div>
        ) : (
          <CardList games={planGame} />
        )}
      </LikedGameStyle>

      {/* 게시글 */}
      <SectionFeed>
        <FeedHeader listType={listType} setListType={setListType} />
        {listType === 'list' ? (
          postData.length === 0 ? (
            <NoPostStyle>
              <div>
                <img src={IconCamera} alt='' />
                <h2>게시물 없음</h2>
              </div>
            </NoPostStyle>
          ) : (
            <PostList post={postData} onlyGame={false} />
          )
        ) : albumPostData.length === 0 ? (
          <NoPostStyle>
            <div>
              <img src={IconCamera} alt='' />
              <h2>사진 게시물 없음</h2>
            </div>
          </NoPostStyle>
        ) : (
          <AlbumFeed>
            {albumPostData.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    type='button'
                    onClick={() => navigate(`/post/${item.id}`)}
                  >
                    <img src={item.image.split(',')[0]} alt='' />
                  </button>
                </li>
              );
            })}
          </AlbumFeed>
        )}
      </SectionFeed>
    </Container>
  );
}

export { UserProfile, MyProfile };
