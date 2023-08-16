import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProductAPI } from '../../api/AddProductAPI';
import {
  NoPostStyle,
  LikedGameStyle,
  Container,
  SectionFeed,
  AlbumFeed,
} from './ProfleStyle';
import CommonProfile from './CommonProfile';
import FeedHeader from './FeedHeader';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import PostList from '../Post/PostList';
import IconCalendar from '../../assets/image/icon-calendar.svg';
import IconShareBtn from '../../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../../assets/image/icon-message-btn.svg';
import IconCamera from '../../assets/image/icon-camera.svg';
import NoImage from '../../assets/image/noimage.png';
import { useFollowMutation, useUnfollowMutation } from '../../hook/useFollow';

export default function UserProfile({ profile, post }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [planGame, setPlanGame] = useState([]);
  const [listType, setListType] = useState('list');
  const gameLink = '/schedule/' + profile.accountname;
  const followMutate = useFollowMutation(id);
  const unfollowMutate = useUnfollowMutation(id);

  // 직관일정, 게시글 데이터 호출
  useEffect(() => {
    const getLikedGameData = async () => {
      const plan = await getProductAPI(id);
      setPlanGame(plan);
    };
    getLikedGameData();
  }, []);

  // 앨범형에 필요한 사진 있는 게시글 필터링
  const albumpost = post.filter((item) => {
    return item.image;
  });

  // 이미지 에러 처리
  const handleImgError = (e) => {
    e.target.src = NoImage;
  };

  // 팔로우 기능 함수
  const handleFollow = async () => {
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

  return (
    <Container>
      {/* 상단 프로필 */}
      <h1 className='a11y-hidden'>{profile.username}님의 프로필 페이지</h1>
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
        <h2 id='game-schedule'>
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
      <SectionFeed id='feed'>
        <FeedHeader listType={listType} setListType={setListType} />
        {listType === 'list' ? (
          // 리스트형
          post.length === 0 ? (
            <NoPostStyle>
              <div>
                <img src={IconCamera} alt='' />
                <h2>게시물 없음</h2>
              </div>
            </NoPostStyle>
          ) : (
            <PostList post={post} onlyGame={false} />
          )
        ) : // 앨범형
        albumpost.length === 0 ? (
          <NoPostStyle>
            <div>
              <img src={IconCamera} alt='' />
              <h2>사진 게시물 없음</h2>
            </div>
          </NoPostStyle>
        ) : (
          <AlbumFeed>
            <h2 className='a11y-hidden'>게시글 (앨범형)</h2>
            {albumpost.map((item) => {
              return (
                <li key={item.id}>
                  <h3 className='a11y-hidden'>
                    {item.author.username}님의 게시글
                  </h3>
                  <button
                    type='button'
                    onClick={() => navigate(`/post/${item.id}`)}
                  >
                    <img
                      className='albumThumbnail'
                      src={item.image.split(',')[0]}
                      alt=''
                      onError={handleImgError}
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
