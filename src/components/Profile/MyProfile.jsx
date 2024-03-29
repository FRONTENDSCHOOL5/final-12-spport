import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  NoPostStyle,
  LikedGameStyle,
  Container,
  SectionFeed,
  AlbumFeed,
} from './ProfleStyle';

import CommonProfile from './CommonProfile';
import CardList from '../List/CardList';
import MButton from '../Common/Button/MButton';
import FeedHeader from './FeedHeader';
import PostList from '../Post/PostList';
import IconCamera from '../../assets/image/icon-camera.svg';
import IconCalendar from '../../assets/image/icon-calendar.svg';
import NoImage from '../../assets/image/noimage.png';

export default function MyProfile({ profile, post, product }) {
  const navigate = useNavigate();
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [listType, setListType] = useState('list');
  const gameLink = '/schedule/' + profile.accountname;

  const today = new Date().setHours(0, 0, 0, 0);

  // 앨범형에 필요한 사진 있는 게시글 필터링
  const albumPostData = post.filter((item) => {
    return item.image;
  });

  // 이미지 에러 처리
  const handleImgError = (e) => {
    e.target.src = NoImage;
  };

  return (
    <Container>
      <h1 className='a11y-hidden'>내 프로필 페이지</h1>
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
        <h2 id='game-schedule'>
          직관 일정 <Link to={gameLink}>전체보기</Link>
        </h2>
        {!product && product.length === 0 ? (
          <div>
            <img src={IconCalendar} alt='' />
            <p>직관일정 없음</p>
          </div>
        ) : (
          <CardList games={product} />
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
        albumPostData.length === 0 ? (
          <NoPostStyle>
            <div>
              <img src={IconCamera} alt='' />
              <h2>사진 게시물 없음</h2>
            </div>
          </NoPostStyle>
        ) : (
          <AlbumFeed>
            <h2 className='a11y-hidden'>게시글 (앨범형)</h2>
            {albumPostData.map((item) => {
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
