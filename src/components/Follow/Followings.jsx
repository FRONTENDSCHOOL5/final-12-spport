import React from 'react';
import FollowList from './FollowList';

export default function Followings({ following }) {
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
            />
          );
        })}
      </ul>
    </>
  );
}
