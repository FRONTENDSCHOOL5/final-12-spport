import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { sortFeedPost } from '../../api/GameAPI/FeedGame';

const PostListStyle = styled.ul`
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

export default function PostList({ post, onlyGame }) {
  const [sortedPost, setSortedPost] = useState([]);

  useEffect(() => {
    setSortedPost(sortFeedPost(post, onlyGame));
  }, [post, onlyGame]);

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
