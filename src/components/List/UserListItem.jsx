import React from 'react';
import styled from 'styled-components';
import { ProfileImage50 } from '../Common/ProfileImage';
import SButton from '../Common/Button/SButton';
import iconBaseball from '../../assets/image/icon-baseball.svg';
import IconSoccer from '../../assets/image/icon-soccer.svg';
import IconVolleyball from '../../assets/image/icon-volleyball.svg';
import { Link } from 'react-router-dom';

const ListItemStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  .img-ListItem {
    width: 42px;
    border-radius: 50px;
    border: 0.5px solid var(--color-steelblue);
  }
  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 12px;
  }
  .username {
    color: var(--color-navy);
    font-size: 14px;
  }
  .accountid {
    color: var(--color-steelblue);
    font-size: 12px;
  }
  img {
    margin-left: auto;
  }
  a + button {
    margin-left: auto;
  }
`;

// user-search <ListItem user={user} />
// team-search <ListItem user={user} />
// user-follow <ListItem user={user} onFollowClick={} follow/>
// team-follow <ListItem user={user} onFollowClick={} follow/>

export default function UserListItem({ user, follow, onFollowClick }) {
  const isTeam = user.accountname.startsWith('SPORT_');
  const isTeamBS = user.accountname.startsWith('SPORT_BS');
  const isTeamSC = user.accountname.startsWith('SPORT_SC');
  const isTeamVB = user.accountname.startsWith('SPORT_VB');

  return (
    <ListItemStyle className='ListItem-wrapper'>
      <Link to={`/profile/${user.accountname}`}>
        {/* TODO author의 프로필을 검색 후 이미지 추가 */}
        <ProfileImage50 image={user.image} />
        <div>
          <span className='username'>{user.username}</span>
          <br />
          <span className='accountid'>
            @ {isTeam ? user.accountname.slice(9) : user.accountname}
          </span>
        </div>
        {isTeamBS && <img src={iconBaseball} alt='야구팀 아이콘' />}
        {isTeamSC && <img src={IconSoccer} alt='축구팀 아이콘' />}
        {isTeamVB && <img src={IconVolleyball} alt='배구팀 아이콘' />}
      </Link>
      {follow && <SButton text='팔로우' func={onFollowClick} />}
    </ListItemStyle>
  );
}
