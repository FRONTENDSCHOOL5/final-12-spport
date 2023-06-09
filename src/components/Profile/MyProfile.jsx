import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
import { userToken, accountname } from '../../atom/loginAtom';
import { getProductAPI } from '../../api/AddProductAPI';
import { getUserPostAPI } from '../../api/ProfileAPI';
import IconCamera from '../../assets/image/icon-camera.svg';
import IconCalendar from '../../assets/image/icon-calendar.svg';
import NoImage from '../../assets/image/noimage.png';

export default function MyProfile({ profile }) {
  const navigate = useNavigate();
  const [numFollower, setNumFollower] = useState(profile.followerCount);
  const [postData, setPostData] = useState([]);
  const [planGame, setPlanGame] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [listType, setListType] = useState('list');
  const gameLink = '/schedule/' + profile.accountname;

  // 직관일정, 게시글 데이터 호출
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

  // 앨범형에 필요한 사진 있는 게시글 필터링
  const albumPostData = postData.filter((item) => {
    return item.image;
  });

  // 이미지 에러 처리
  const handleImgError = (e) => {
    e.target.src = NoImage;
  };

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
