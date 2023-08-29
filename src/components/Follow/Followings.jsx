import React, { useState, useEffect } from 'react';
import FollowList from './FollowList';
import { useInView } from 'react-intersection-observer';
import { useFollowingQuery } from '../../hooks/useFollow';

export default function Followings({ id, count }) {
  const [followings, setFollowings] = useState([]);
  const { following, getNextFollowing, hasNextFollowing } =
    useFollowingQuery(id);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (inView && hasNextFollowing && parseInt(count / 15) > page) {
      setPage((prev) => prev + 1);
      getNextFollowing();
    }
  }, [inView]);

  useEffect(() => {
    setFollowings((prev) => [
      ...(prev || []),
      ...(following?.pages[page] || []),
    ]);
  }, [following?.pages.length]);

  return (
    <>
      <h1 className='a11y-hidden'>팔로잉 목록</h1>
      <ul>
        {followings.length > 0 &&
          followings.map((item, index) => (
            <FollowList
              key={index}
              username={item.username}
              accountname={item.accountname}
              image={item.image}
              page='followings'
              isfollow={item.isfollow}
              isMyAccount={item.accountname === id}
            />
          ))}
        <span ref={ref} />
      </ul>
    </>
  );
}
