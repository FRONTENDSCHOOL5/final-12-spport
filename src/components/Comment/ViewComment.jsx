import React from 'react';
import styled from 'styled-components';
import { ProfileImage36 } from '../Common/ProfileImage';
import more from '../../assets/image/icon-more-small.svg';
import { Link } from 'react-router-dom';
import {
  useDeleteCommentMutation,
  useReportCommentMutation,
} from '../../hooks/useComment';
import useModal from '../../hooks/useModal';
import useBottomSheet from '../../hooks/useBottomSheet';
import useAuth from '../../hooks/useAuth';

const VComment = styled.article`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    /* padding-left: 50px; */
    padding: 10px 20px 10px 47px;
    font-size: 14px;
    word-break: break-all;
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

export default function ViewComment({ comment, post_id }) {
  // 일단 버튼을 누르면 modal이 나오도록 해둠
  // modal이 false면 안나오고 버튼을 누르면 setModal로 true로 바뀌며 모달 생성
  // 기본값은 false
  const profileLink = `/profile/${comment.author.accountname}`;
  const date = comment.createdAt;
  const displayDate = `${date.slice(0, 4)}.${parseInt(
    date.slice(5, 7),
  )}.${parseInt(date.slice(8))} ${date.slice(11, 13)}:${date.slice(14, 16)}`;

  const { accountname } = useAuth();
  const { functionModal } = useModal();
  const { updateBottomSheet, openBottomSheet } = useBottomSheet();
  const deleteCommentMutate = useDeleteCommentMutation(post_id, comment.id);
  const reportCommentMutate = useReportCommentMutation(post_id, comment.id);

  const onMoreClick = () => {
    openBottomSheet();
    if (accountname === comment.author.accountname) {
      const onCommentDelete = () => {
        functionModal(
          '해당 댓글을 삭제할까요?',
          '삭제',
          '해당 댓글이 삭제되었습니다.',
          '확인',
          async () => await deleteCommentMutate.mutateAsync(),
        );
      };
      updateBottomSheet([['삭제', onCommentDelete]]);
    } else {
      const onCommentReport = async () => {
        await reportCommentMutate.mutateAsync();
        functionModal(
          '해당 댓글을 신고할까요?',
          '신고',
          '해당 댓글이 신고되었습니다.',
          '확인',
          async () => await reportCommentMutate.mutateAsync(),
        );
      };
      updateBottomSheet([['신고', onCommentReport]]);
    }
  };

  return (
    <VComment>
      <section className='comment-content'>
        <Link to={profileLink}>
          <ProfileImage36 image={comment.author.image} />
        </Link>
        <section className='w-info'>
          <p className='w-name'>{comment.author.username}</p>
          <p className='w-time'>{displayDate}</p>
        </section>
        <button className='btn-more' onClick={onMoreClick}></button>
      </section>
      <p className='w-content'>{comment.content}</p>
    </VComment>
  );
}
