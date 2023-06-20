import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { sortFeedPost } from '../../api/GameAPI/FeedGame';

const PostListStyle = styled.ul`
  padding: 0 16px;
  li {
    margin-bottom: 40px;
  }
`;

export default function PostList({ post, onlyGame }) {
  const [sortedPost, setSortedPost] = useState(sortFeedPost(post, onlyGame));
  useEffect(() => {
    setSortedPost(sortFeedPost(post, onlyGame));
  }, [onlyGame]);
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
