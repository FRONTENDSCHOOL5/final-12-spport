import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImage36 } from '../Common/ProfileImage';
import more from '../../assets/image/icon-more-small.svg';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userToken, accountname } from '../../atom/loginAtom';
import {
  isBottomSheetOpen,
  bottomSheetItems,
} from '../../atom/bottomSheetAtom';
import { isModalOpen, modalItems } from '../../atom/modalAtom';
import {
  deleteCommentAPI,
  reportCommentAPI,
} from '../../api/PostAPI.js/CommentAPI';

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
    padding-left: 60px;
    padding: 10px 20px 10px 50px;
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

  const [token, setToken] = useRecoilState(userToken);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [bsItems, setBsItems] = useRecoilState(bottomSheetItems);
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);

  const onMoreClick = () => {
    setIsBsOpen((prev) => !prev);
    if (accountName === comment.author.accountname) {
      const onCommentDelete = () => {
        setIsModal(true);
        const deleteComment = async () => {
          const data = await deleteCommentAPI(token, post_id, comment.id);
          setIsModal(true);
          setModalItem([
            '해당 댓글이 삭제되었습니다.',
            '확인',
            function () {
              location.reload();
            },
          ]);
        };
        setModalItem(['해당 댓글을 삭제할까요?', '삭제', deleteComment]);
      };
      const bsItem = [['삭제', onCommentDelete]];
      setBsItems(bsItem);
    } else {
      const onCommentReport = () => {
        setIsModal(true);
        const reportComment = async () => {
          const data = await reportCommentAPI(token, post_id, comment.id);
          setIsModal(true);
          setModalItem(['해당 댓글이 신고되었습니다.', '확인', function () {}]);
        };
        setModalItem(['해당 댓글을 신고할까요?', '신고', reportComment]);
      };
      const bsItem = [['신고', onCommentReport]];
      setBsItems(bsItem);
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
          <p className='w-time'>{displayDate}</p>
        </section>
        <button className='btn-more' onClick={onMoreClick}></button>
      </section>
      <p className='w-content'>{comment.content}</p>
    </VComment>
  );
}
