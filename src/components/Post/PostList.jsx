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
`;

export default function PostList({ post, onlyGame }) {
  const [sortedPost, setSortedPost] = useState([]);

  useEffect(() => {
    setSortedPost(sortFeedPost(post, onlyGame));
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
