import React from 'react';
import PostProfile from './PostProfile';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GamePost from './GamePost';
import RegularPost from './RegularPost';
import BtnGroup from './BtnGroup';

const PostStyle = styled.article`
  width: 358px;
  .post-wrapper {
    margin-left: 52px;
    color: var(--color-navy);
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 10px;
    .post-time {
      color: var(--color-steelblue);
      font-size: 10px;
      text-align: start;
    }
  }
`;

// const post = {
//   id: 'String',
//   content: 'String',
//   image: 'String',
//   createdAt: 'String',
//   updatedAt: 'String',
//   hearted: false,
//   heartCount: 0,
//   commentCount: 0,
//   author: {
//     _id: '작성자 id',
//     username: '2',
//     accountname: '2',
//     following: [],
//     follower: ['follower id'],
//     followerCount: 1,
//     followingCount: 0,
//   },
// };

// const game = {
//   date: '06.01',
//   day: '목',
//   time: '18:30',
//   home: 'LG',
//   away: '롯데',
//   stadium: '잠실',
//   full_stadium: '서울종합운동장 야구장',
// };

// Regular Post = <Post post={post} />
// Game Post = <Post game={game} />

// const convertDate = (date) => {
//   return `${date.slice(0, 4)}년 ${parseInt(date.slice(5, 7))}월 ${parseInt(
//     date.slice(8),
//   )}일`;
// };

export default function Post({ post, game }) {
  const date = game ? post.image : post.createAt.slice(0, 10);
  const displayDate = `${date.slice(0, 4)}년 ${parseInt(
    date.slice(5, 7),
  )}월 ${parseInt(date.slice(8))}일`;
  return (
    <PostStyle>
      <PostProfile author={post.author} />
      <div className='post-wrapper'>
        <Link to={`/post/${post.id}`}>
          {game ? (
            <GamePost game={game} post={post} />
          ) : (
            <RegularPost post={post} />
          )}
        </Link>
        <BtnGroup
          id={post.id}
          hearted={post.hearted}
          heartCount={post.heartCount}
          commentCount={post.commentCount}
        />
        <time className='post-time' dateTime={date}>
          {displayDate}
        </time>
      </div>
    </PostStyle>
  );
}
