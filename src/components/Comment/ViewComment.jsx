import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImage36 } from '../Common/ProfileImage';
import more from '../../assets/image/icon-more-small.svg';
import Modal from '../Common/Modal';

const VComment = styled.article`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ////
  div {
    box-shadow: inset 0 0 10px red;
    background-color: red;
    flex-shrink: 0;
  }
  .comment-content {
    display: flex;
    /* justify-content: space-between; */
    gap: 10px;
    width: 100%;
  }
  .w-info {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
  .w-time {
    font-size: 12px;
    color: var(--color-darkgrey);
  }
  .w-content {
    padding-left: 60px;
    padding: 10px 20px 10px 50px;
  }
  .btn-more {
    margin-left: 0;
    width: 10px;
    background: url(${more}) no-repeat;
    background-position: center;
  }
`;

// props.name 댓글 작성자
// props.time 댓글 작성 시간
// props.content 댓글 내용

export default function ViewComment(props) {
  // 일단 버튼을 누르면 modal이 나오도록 해둠
  // modal이 false면 안나오고 버튼을 누르면 setModal로 true로 바뀌며 모달 생성
  // 기본값은 false
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
        <ProfileImage36 />
        <section className='w-info'>
          {/* props가 없으면 댓글이 없습니다 */}
          {/* 나중에 조건부 렌더링으로 아예 다른 페이지가 나오도록 수정 */}
          <p className='w-name'>{props.name || '댓글이 없습니다'}</p>
          <p className='w-time'>{props.time}</p>
        </section>
        <button className='btn-more' onClick={commentBtn}></button>
      </section>
      <p className='w-content'>{props.content}</p>
      {modal === true ? <Modal /> : null}
    </VComment>
  );
}
