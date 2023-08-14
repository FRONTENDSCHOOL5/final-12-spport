import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage50 } from '../Common/ProfileImage';
import styled from 'styled-components';
import SButton from '../Common/Button/SButton';
import IconBaseball from '../../assets/image/icon-baseball.svg';
import IconSoccer from '../../assets/image/icon-soccer.svg';
import { useFollowMutation, useUnfollowMutation } from '../../hook/useFollow';

const ListStyle = styled.li`
  display: flex;
  padding: 10px 16px;
  list-style: none;
  .text {
    padding: 5px 0 0 12px;
  }
  .text strong {
    font-size: 14px;
  }
  .text p {
    margin-top: 6px;
    font-size: 12px;
    color: #586c9d;
  }
  .btnBox {
    display: flex;
    align-items: center;
    margin-left: auto;
    .btnBall img {
      vertical-align: top;
      margin-right: 10px;
    }
    button {
      font-size: 12px;
    }
  }
  & > button {
    display: flex;
    text-align: start;
    width: 100%;
  }
`;
export default function FollowList(props) {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(props.isfollow);
  const followMutate = useFollowMutation(props.accountname);
  const unfollowMutate = useUnfollowMutation(props.accountname);

  // 팔로우 기능
  const handleFollow = async () => {
    if (isFollow) {
      const data = await unfollowMutate.mutateAsync();
      setIsFollow(data.profile.isfollow);
    } else {
      const data = await followMutate.mutateAsync();
      setIsFollow(data.profile.isfollow);
    }
  };
  return (
    <ListStyle>
      <button
        type='button'
        onClick={() => navigate(`/profile/${props.accountname}`)}
      >
        <ProfileImage50 image={props.image} />
        <div className='text'>
          <strong>{props.username}</strong>
          <p>
            @{' '}
            {props.accountname.startsWith('SPORT_')
              ? props.accountname.slice(9)
              : props.accountname}
          </p>
        </div>
      </button>
      <div className='btnBox'>
        {/* 팀프로필 및 사람프로필에 따라 팔로우버튼 옆 공 아이콘 조건부렌더링 */}
        {props.accountname.startsWith('SPORT_BS') ? (
          <button className='btnBall'>
            <img src={IconBaseball} alt='' />
          </button>
        ) : (
          props.accountname.startsWith('SPORT_SC') && (
            <button className='btnBall'>
              <img src={IconSoccer} alt='' />
            </button>
          )
        )}
        {props.isMyAccount || (
          <SButton
            text={isFollow === true ? '취소' : '팔로우'}
            func={handleFollow}
            active={isFollow}
          />
        )}
      </div>
    </ListStyle>
  );
}
