import React, { useState, useEffect } from 'react';
import FollowList from './FollowList';
import { useInView } from 'react-intersection-observer';
import useAuth from '../../hooks/useAuth';

export default function Followers({ follower }) {
  const { accountname } = useAuth();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  // 팀 계정을 리스트 상단에 올리기 위해 분류
  const sortedData = [...follower].sort((a, b) => {
    if (b.accountname.startsWith('SPORT_')) {
      return 1;
    } else {
      return -2;
    }
  });

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 15);
    }
  }, [inView]);

  return (
    <>
      <h1 className='a11y-hidden'>팔로워 목록</h1>
      <ul>
        {sortedData.map((item, index) => {
          if (index < page) {
            return (
              <FollowList
                key={index}
                username={item.username}
                accountname={item.accountname}
                image={item.image}
                page='followers'
                isfollow={item.isfollow}
                isMyAccount={item.accountname === accountname}
              />
            );
          }
        })}
        <span ref={ref} />
      </ul>
    </>
  );
}
