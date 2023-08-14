import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { sortFeedPost } from '../../api/GameAPI/FeedGame';
import { useInView } from 'react-intersection-observer';

const PostListStyle = styled.ul`
  padding: 20px 16px 50px;
  min-height: 350px;
  li {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }
  p {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export default function PostList({ post, onlyGame, isHome }) {
  const [sortedPost, setSortedPost] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isHome) {
      setSortedPost(sortFeedPost(post, onlyGame));
      setPage(0);
    } else {
      setSortedPost(post);
    }
  }, [post, onlyGame]);

  useEffect(() => {
    if (inView) {
      isHome ? setPage((prev) => prev + 10) : setPage((prev) => prev + 3);
    }
  }, [inView]);

  return (
    <PostListStyle>
      {isHome ? (
        <h2 className='a11y-hidden'>{onlyGame ? '일정 피드' : '전체 피드'}</h2>
      ) : (
        <h2 className='a11y-hidden'>게시글 (리스트형)</h2>
      )}

      {sortedPost.map((item, index) => {
        if (index < page) {
          return (
            <li key={item.id}>
              <h3 className='a11y-hidden'>{item.author.username}님의 게시글</h3>
              <Post post={item} />
            </li>
          );
        }
      })}
      <span ref={ref} />
    </PostListStyle>
  );
}
