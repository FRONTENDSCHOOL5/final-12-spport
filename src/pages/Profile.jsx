import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameInfoByTeam } from '../api/GameAPI/TeamProfileGameAPI';
import GameList from '../components/List/GameList';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ProfileImage110 } from '../components/Common/ProfileImage';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import MButton from '../components/Common/Button/MButton';
import TagButton from '../components/Common/Button/TagButton';
import IconShareBtn from '../assets/image/icon-share-btn.svg';
import IconMessageBtn from '../assets/image/icon-message-btn.svg';
import IconBaseball from '../assets/image/icon-baseball.svg';
import IconSoccer from '../assets/image/icon-soccer.svg';
import IconPostAlbumOff from '../assets/image/icon-post-album-off.svg';
import IconPostAlbumOn from '../assets/image/icon-post-album-on.svg';
import IconPostListOff from '../assets/image/icon-post-list-off.svg';
import IconPostListOn from '../assets/image/icon-post-list-on.svg';

const SectionGameStyle = styled.section`
  h2 {
    border-bottom: 0.5px solid var(--color-maingrey);
    padding: 12px 20px;
  }
  ul {
    padding: 20px;
  }
`;

function Profile() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };
    getData();
  }, []);
  return (
    <>
      <SectionGameStyle className='section-game'>
        <h2>경기 일정</h2>
        <GameList games={game} />
      </SectionGameStyle>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 50px 0 60px;
  background-color: var(--color-bg);
`;

//////////////// 공통 프로필
const ContainerStyle = styled.section`
  display: grid;
  width: 100%;
  grid-template-areas:
    'followers profileImage followings'
    'description description description'
    'follow follow follow';
  place-items: center;
  background-color: #fff;
  grid-template-columns: 1fr 200px 1fr;

  // 1열
  .followers {
    grid-area: followers;
    justify-self: end;
  }
  .profileImg {
    grid-area: profileImage;
    padding: 30px 0px 16px;
  }
  .followings {
    grid-area: followings;
    justify-self: start;
    // 팀프로필이라면~ 조건부렌더링 수정 요망
    width: 43px;
    height: 43px;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
    button {
      width: 100%;
      height: 100%;
    }
  }
  .followers,
  .followings {
    strong {
      font-size: 18px;
    }
    p {
      font-size: 10px;
      margin-top: 6px;
      color: #586c9d;
    }
  }

  // 2열
  .description {
    grid-area: description;
    justify-self: center;
    text-align: center;
    strong {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      color: #586c9d;
      margin-bottom: 8px;
    }
    span {
      display: inline-block;
      margin: 0px 3.5px;
      padding: 4px 8px;
      font-size: 14px;
      border-radius: 5px;
      color: var(--color-lime);
      background-color: var(--color-navy);
    }

    .tag-container {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      justify-content: center;
      width: 200px;
    }
  }

  // 3열
  .follow {
    grid-area: follow;
    display: flex;
    align-items: center;
    margin: 26px 0;
    // sort로 구분
    // teamProfile (1개)
    // myProfile(2개)
    button {
      margin: 0 6px;
    }
    // yourProfile(3개)
    /* button:nth-child(2) {
      margin: 0 10px;
    } */
    button img {
      vertical-align: top;
    }
  }
`;

function ProfileCommon(props) {
  return (
    <ContainerStyle>
      {/* 1열 */}
      {/* follwers, profile image, followings */}
      <div className='followers'>
        <button>
          <strong>2950</strong>
          <p>followers</p>
        </button>
      </div>
      {/* 프로필 이미지 */}
      <div className='profileImg'>
        <ProfileImage110 image={props.image} />
      </div>
      {/* 팀 프로필일 시 followings 대신 야구공/축구공 아이콘 조건부 렌더링(sort로 축구/야구 구분) */}
      <div className='followings'>
        {props.sort === 'teamProfile baseball' ? (
          <button type='button'>
            <img src={IconBaseball} alt='' />
          </button>
        ) : props.sort === 'teamProfile soccer' ? (
          <button type='button'>
            <img src={IconSoccer} alt='' />
          </button>
        ) : (
          <button>
            <strong>128</strong>
            <p>followings</p>
          </button>
        )}
      </div>

      {/* 2열 */}
      {/* 이름, 아이디, 태그 */}
      <div className='description'>
        <strong>{props.username}</strong>
        <p>@ {props.accountname}</p>
        <div className='tag-container'>
          {/* 타인/개인 프로필과 팀 프로필의 조건부 렌더링 */}
          {props.sort === 'yourProfile' || props.sort === 'myProfile' ? (
            <>
              <TagButton className='tagBtn' text={props.intro} />
              <TagButton className='tagBtn' text={props.teamname} />
            </>
          ) : (
            <>
              <TagButton className='tagBtn' text={props.hometown} />
              <TagButton className='tagBtn' text={props.director} />
              <TagButton className='tagBtn' text={props.stadium} />
            </>
          )}
        </div>
      </div>
      {/* 3열 */}
      {/* 프로필별 버튼(다른사람: 메시지, 팔로우, 공유 / 나: 프로필수정, 일정추가 / 팀: 팔로우, 언팔로우 ) */}
      <div className='follow'>{props.children}</div>
    </ContainerStyle>
  );
}
//////////////// 개별 프로필
const SectionSchedule = styled.section`
  width: 100%;
  padding: 20px 16px;
  background-color: #fff;
  .title-gameSchedule {
    font-size: 16px;
  }
`;
const SectionFeed = styled.section`
  background-color: #fff;
  .header-feed {
    padding: 9px;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
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
function YourProfile(props) {
  const [state, setState] = useState(false);
  const [listType, setListType] = useState('list');
  const handleState = () => {
    setState(!state);
  };
  return (
    <>
      <h1 className='a11y-hidden'> {props.username} 프로필 페이지</h1>
      <BrowserRouter>
        <Header text />
      </BrowserRouter>
      <Container>
        <ProfileCommon
          sort={props.sort}
          username={props.username}
          accountname={props.accountname}
          intro={props.intro}
          teamname={props.teamname}
          image={props.image}
        >
          <button type='button'>
            <img src={IconShareBtn} alt='공유' />
          </button>
          <MButton
            text={state ? '언팔로우' : '팔로우'}
            func={handleState}
            active={state}
          />
          <button type='button'>
            <img src={IconMessageBtn} alt='공유' />
          </button>
        </ProfileCommon>
        {/* 직관 경기 일정 */}
        <SectionSchedule>
          <h2 className='title-gameSchedule'>직관 경기 일정</h2>
          <div>
            <article>{/* 게임카드 컴포넌트 */}</article>
          </div>
        </SectionSchedule>
        {/* 프로필 피드 */}
        <SectionFeed>
          {/* 목록형, 앨범형 */}
          <div className='header-feed'>
            <div className='btns'>
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
              <button
                onClick={() => {
                  setListType('album');
                }}
              >
                <img
                  src={
                    listType === 'album' ? IconPostAlbumOn : IconPostAlbumOff
                  }
                  alt='앨범형 게시글 버튼'
                />
              </button>
            </div>
          </div>
        </SectionFeed>
      </Container>
      <NavBar
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  );
}

function MyProfile(props) {
  const [listType, setListType] = useState('list');

  return (
    <>
      <BrowserRouter>
        <Header text />
      </BrowserRouter>
      <Container>
        <ProfileCommon
          sort={props.sort}
          username={props.username}
          accountname={props.accountname}
          intro={props.intro}
          teamname={props.teamname}
          image={props.image}
        >
          <MButton text='프로필 수정' active />
          <MButton text='일정 추가' active />
        </ProfileCommon>
        {/* 직관 경기 일정 */}
        <SectionSchedule>
          <h2 className='title-gameSchedule'>직관 경기 일정</h2>
          <div>
            <article>{/* 게임카드 컴포넌트 */}</article>
          </div>
        </SectionSchedule>
        {/* 프로필 피드 */}
        <SectionFeed>
          {/* 목록형, 앨범형 */}
          <div className='header-feed'>
            <div className='btns'>
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
              <button
                onClick={() => {
                  setListType('album');
                }}
              >
                <img
                  src={
                    listType === 'album' ? IconPostAlbumOn : IconPostAlbumOff
                  }
                  alt='앨범형 게시글 버튼'
                />
              </button>
            </div>
          </div>
        </SectionFeed>
      </Container>
      <NavBar
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  );
}
const BtnPlayer = styled.button`
  background-color: #fff;
  padding: 12px 0;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  &:not(:disabled):hover {
    background-color: var(--color-lime);
    color: var(--color-navy);
  }
`;

function TeamProfile(props) {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };
  return (
    <>
      <BrowserRouter>
        <Header text />
      </BrowserRouter>
      <Container>
        <ProfileCommon
          sort={props.sort}
          username={props.ko_name}
          accountname={props.en_name}
          hometown={props.hometown}
          director={props.director}
          stadium={props.stadium}
          image={props.image}
        >
          <MButton
            text={state ? '언팔로우' : '팔로우'}
            func={handleState}
            active={state}
          />
        </ProfileCommon>
        <BtnPlayer>선수보러가기</BtnPlayer>
      </Container>
      <NavBar
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </>
  );
}

export { YourProfile, MyProfile, TeamProfile, Profile };
