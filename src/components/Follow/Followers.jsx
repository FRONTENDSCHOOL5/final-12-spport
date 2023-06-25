import React from 'react';
import FollowList from './FollowList';
import { useRecoilState } from 'recoil';
import { accountname } from '../../atom/loginAtom';

export default function Followers({ follower, token }) {
  const [myAccountname, setMyAccountname] = useRecoilState(accountname);

  // 팀 계정을 리스트 상단에 올리기 위해 분류
  const sortedData = [...follower].sort((a, b) => {
    if (b.accountname.startsWith('SPORT_')) {
      return 1;
    } else {
      return -2;
    }
  });

  return (
    <>
      <ul>
        {sortedData.map((item, index) => {
          return (
            <FollowList
              key={index}
              username={item.username}
              accountname={item.accountname}
              image={item.image}
              page='followers'
              isfollow={item.isfollow}
              isMyAccount={item.accountname === myAccountname}
              token={token}
            />
          );
        })}
      </ul>
    </>
  );
}
