import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ProfileImage110 } from '../Common/ProfileImage';
import IconBaseball from '../../assets/image/icon-baseball.svg';
import IconSoccer from '../../assets/image/icon-soccer.svg';
import IconVolleyball from '../../assets/image/icon-volleyball.svg';
import TagButton from '../Common/Button/TagButton';

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
  border-bottom: 0.5px solid var(--color-maingrey);
  // 1열
  .followers {
    grid-area: followers;
    justify-self: end;
  }
  .imgProfile {
    grid-area: profileImage;
    padding: 30px 0px 16px;
  }
  .followings {
    grid-area: followings;
    justify-self: start;
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
    button {
      margin: 0 6px;
    }
    button img {
      vertical-align: top;
    }
  }
`;

export default function CommonProfile({ profile, children, numFollower }) {
  const location = useLocation();
  const navigate = useNavigate();
  const tags = profile.intro.length === 0 ? [] : profile?.intro?.split(',');
  const path = location.pathname;
  const isTeamBS = profile.accountname.startsWith('SPORT_BS');
  const isTeamSC = profile.accountname.startsWith('SPORT_SC');
  const isTeamVB = profile.accountname.startsWith('SPORT_VB');

  return (
    <ContainerStyle>
      <h2 id='profile' className='a11y-hidden' style={{ left: 0, top: 0 }}>
        프로필
      </h2>
      {/* 1행 */}
      {/* follwers, profile image, followings */}
      <div className='followers'>
        <button
          type='button'
          onClick={() => {
            navigate(path + '/follower');
          }}
        >
          <strong>{numFollower}</strong>
          <p>followers</p>
        </button>
      </div>
      {/* 프로필 이미지 */}
      <div className='imgProfile'>
        <ProfileImage110 image={profile.image} />
      </div>
      {/* 팀 프로필일 시 followings 대신 야구공/축구공 아이콘 조건부 렌더링(sort로 축구/야구 구분) */}
      <div className='followings'>
        {isTeamBS && (
          <button type='button' onClick={() => navigate('/search/SPORT_BS_')}>
            <img src={IconBaseball} alt='' />
          </button>
        )}
        {isTeamSC && (
          <button type='button' onClick={() => navigate('/search/SPORT_SC_')}>
            <img src={IconSoccer} alt='' />
          </button>
        )}
        {isTeamVB && (
          <button type='button' onClick={() => navigate('/search/SPORT_VB_')}>
            <img src={IconVolleyball} alt='' />
          </button>
        )}
        {!isTeamBS && !isTeamSC && !isTeamVB && (
          <button
            type='button'
            onClick={() => {
              navigate(path + '/following');
            }}
          >
            <strong>{profile.followingCount}</strong>
            <p>followings</p>
          </button>
        )}
      </div>

      {/* 2행 */}
      {/* 이름, 아이디, 태그 */}
      <div className='description'>
        <strong>{profile.username}</strong>
        <p>
          @{' '}
          {profile.accountname.startsWith('SPORT_')
            ? profile.accountname.slice(9)
            : profile.accountname}
        </p>
        <div className='tag-container'>
          {!!tags.length &&
            tags.map((item) => {
              return (
                <TagButton
                  key={item}
                  className='tagBtn'
                  text={item}
                  func={() => navigate(`/tag/${item}`)}
                />
              );
            })}
        </div>
      </div>
      {/* 3행 */}
      {/* 프로필별 버튼(다른사람: 메시지, 팔로우, 공유 / 나: 프로필수정, 일정추가 / 팀: 팔로우, 언팔로우 ) */}
      <div className='follow'>{children}</div>
    </ContainerStyle>
  );
}
