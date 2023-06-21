import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImage36 } from '../Common/ProfileImage';
import more from '../../assets/image/icon-more-small.svg';
import Modal from '../Common/Modal';
import { Link } from 'react-router-dom';

const VComment = styled.article`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ////
  div {
    background-color: var(--color-steelblue);
    flex-shrink: 0;
  }
  .comment-content {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .w-info {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
  .w-name {
    font-size: 14px;
  }
  .w-time {
    font-size: 10px;
    color: var(--color-darkgrey);
  }
  .w-content {
    padding-left: 60px;
    padding: 10px 20px 10px 50px;
    font-size: 14px;
  }
  .btn-more {
    margin-left: 0;
    width: 10px;
    background: url(${more}) no-repeat;
    background-position: center;
  }
`;

// comment.name 댓글 작성자
// comment.time 댓글 작성 시간
// comment.content 댓글 내용

export default function ViewComment({ comment }) {
  // 일단 버튼을 누르면 modal이 나오도록 해둠
  // modal이 false면 안나오고 버튼을 누르면 setModal로 true로 바뀌며 모달 생성
  // 기본값은 false
  const profileLink = `/profile/${comment.author.accountname}`;
  const [modal, setModal] = useState(false);

  const commentBtn = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <VComment>
      <section className='comment-content'>
        <Link to={profileLink}>
          <ProfileImage36 image={comment.author.image} />
        </Link>
        <section className='w-info'>
          {/* comment가 없으면 댓글이 없습니다 */}
          {/* 나중에 조건부 렌더링으로 아예 다른 페이지가 나오도록 수정 */}
          <p className='w-name'>{comment.author.username}</p>
          <p className='w-time'>{comment.createdAt}</p>
        </section>
        <button className='btn-more' onClick={commentBtn}></button>
      </section>
      <p className='w-content'>{comment.content}</p>
      {modal === true ? <Modal /> : null}
    </VComment>
  );
}
