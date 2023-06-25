import React from 'react';
import FollowList from './FollowList';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accountname } from '../../atom/loginAtom';

export default function Followings({ following, token }) {
  const { id } = useParams();
  const [myAccountname, setMyAccountname] = useRecoilState(accountname);
  const isMyAccount = id === myAccountname;

  const sortedData = [...following].sort((a, b) => {
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
              page='followings'
              isfollow={item.isfollow}
              isMyAccount={isMyAccount}
              token={token}
            />
          );
        })}
      </ul>
    </>
  );
}
