import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { sortFeedPost } from '../../api/GameAPI/FeedGame';

const PostListStyle = styled.ul`
  border-top: 0.5px solid var(--color-maingrey);
  background: white;
  padding: 20px 16px 50px;
  min-height: 350px;
  li {
    margin-bottom: 40px;
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

  useEffect(() => {
    if (isHome) {
      setSortedPost(sortFeedPost(post, onlyGame));
    } else {
      setSortedPost(post);
    }
  }, [post, onlyGame]);

  console.log(sortedPost);

  return (
    <PostListStyle>
      {sortedPost.map((item) => {
        return (
          <li key={item.id}>
            <Post post={item} />
          </li>
        );
      })}
    </PostListStyle>
  );
}
