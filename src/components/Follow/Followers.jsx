import React, { useState, useEffect } from 'react';
import FollowList from './FollowList';
import { useInView } from 'react-intersection-observer';
import { useFollowerQuery } from '../../hooks/useFollow';

export default function Followers({ id, count }) {
  const [followers, setFollowers] = useState([]);
  const { follower, getNextFollower, hasNextFollower } = useFollowerQuery(id);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (inView && hasNextFollower && parseInt(count / 15) > page) {
      setPage((prev) => prev + 1);
      getNextFollower();
    }
  }, [inView]);

  useEffect(() => {
    setFollowers((prev) => [
      ...(prev || []),
      ...FollowList(follower?.pages[page] || []),
    ]);
  }, [follower?.pages.length]);

  return (
    <>
      <h1 className='a11y-hidden'>팔로워 목록</h1>
      <ul>
        {followers.length > 0 &&
          followers.map((item, index) => (
            <FollowList
              key={index}
              username={item.username}
              accountname={item.accountname}
              image={item.image}
              page='followers'
              isfollow={item.isfollow}
              isMyAccount={item.accountname === id}
            />
          ))}
        <span ref={ref} />
      </ul>
    </>
  );
}
