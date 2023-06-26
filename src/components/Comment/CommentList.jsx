import React from 'react';
import styled from 'styled-components';
import InputComment from './InputComment';
import ViewComment from './ViewComment';
import { useState } from 'react';

const ContainerStyle = styled.div`
  padding-bottom: 60px;
`;

const CommentListStyle = styled.ul`
  padding: 8px 0 0;
  border-top: 0.5px solid var(--color-maingrey);
`;

const BtnMoreStyle = styled.button`
  padding: 10px 0 10px;
  margin-bottom: 10px;
  width: 100%;
`;

// props.name 댓글 작성자
// props.time 댓글 작성 시간
// props.content 댓글 내용

export default function CommentList({ comments, post_id }) {
  const checkTen = comments.length > 10;
  const cmtTen = comments.filter((__, index) => index < 10);
  const cmtRest = comments.filter((__, index) => index >= 10);
  const [isClick, setIsClick] = useState(false);

  const handleMoreClick = () => {
    setIsClick(true);
  };

  return (
    <>
      <ContainerStyle>
        <CommentListStyle>
          {cmtTen.map((item) => {
            return (
              <li key={item.id}>
                <ViewComment comment={item} post_id={post_id} />
              </li>
            );
          })}
          {isClick &&
            cmtRest.map((item) => {
              return (
                <li key={item.id}>
                  <ViewComment comment={item} post_id={post_id} />
                </li>
              );
            })}
        </CommentListStyle>
        {checkTen && !isClick && (
          <BtnMoreStyle type='button' onClick={handleMoreClick}>
            더보기
          </BtnMoreStyle>
        )}
      </ContainerStyle>
      <InputComment />
    </>
  );
}
