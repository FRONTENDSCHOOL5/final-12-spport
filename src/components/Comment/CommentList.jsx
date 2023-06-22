import React from 'react';
import styled from 'styled-components';
import InputComment from './InputComment';
import ViewComment from './ViewComment';

const CommentListStyle = styled.ul`
  padding: 8px 0 60px;
  border-top: 0.5px solid var(--color-maingrey);
`;

// props.name 댓글 작성자
// props.time 댓글 작성 시간
// props.content 댓글 내용

export default function CommentList({ comments, post_id }) {
  return (
    <>
      <CommentListStyle>
        {comments.map((item) => {
          return (
            <li key={item.id}>
              <ViewComment comment={item} post_id={post_id} />
            </li>
          );
        })}
      </CommentListStyle>
      <InputComment />
    </>
  );
}
