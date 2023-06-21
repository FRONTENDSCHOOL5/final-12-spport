import React, { useState } from 'react';
import FollowList from './FollowList';

export default function Followers({ follower }) {
  const sortedData = [...follower].sort((a, b) => {
    if (b.accountname.startsWith('SPORT_')) {
      return 1;
    } else {
      return -2;
    }
  });
  const [followers, setFollowers] = useState(sortedData);
  const handleList = (item) => {
    setFollowers(
      followers.filter((i) => {
        return item !== i;
      }),
    );
  };

  return (
    <>
      <ul>
        {followers.map((item, index) => {
          return (
            <FollowList
              key={index}
              username={item.username}
              accountname={item.accountname}
              image={item.image}
              page='followers'
              func={() => handleList(item)}
            />
          );
        })}
      </ul>
    </>
  );
}
