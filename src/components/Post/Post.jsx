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

export default function Post({ post }) {
  const isTeam = post.author.accountname.startsWith('SPORT_');
  const date = isTeam ? post.image : post.createdAt.slice(0, 10);
  const displayDate = `${date.slice(0, 4)}년 ${parseInt(
    date.slice(5, 7),
  )}월 ${parseInt(date.slice(8))}일`;
  // useEffect(() => {
    
  // }, [])
  return (
    <PostStyle>
      <PostProfile author={post.author} />
      <div className='post-wrapper'>
        <Link to={`/post/${post.id}`}>
          {isTeam ? (
            <GamePost post={post} />
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
