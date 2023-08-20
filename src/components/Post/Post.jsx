import React from 'react';
import PostProfile from './PostProfile';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import GamePost from './GamePost';
import RegularPost from './RegularPost';
import BtnGroup from './BtnGroup';
import {
  useDeletePostMutation,
  useReportPostMutation,
} from '../../hooks/usePost';
import { Helmet } from 'react-helmet-async';
import useBottomSheet from '../../hooks/useBottomSheet';
import useModal from '../../hooks/useModal';
import useAuth from '../../hooks/useAuth';

const PostStyle = styled.article`
  width: 500px;
  .post-wrapper {
    margin-left: 52px;
    color: var(--color-navy);
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 10px;
    .post-time {
      color: var(--color-steelblue);
      font-size: 10px;
      text-align: start;
    }
  }
`;

function Post({ post }) {
  const navigate = useNavigate();
  const isTeam = post.author.accountname.startsWith('SPORT_');
  const date = isTeam
    ? post.content.split(',')[0]
    : post.createdAt.slice(0, 10);
  const displayDate = `${date.slice(0, 4)}년 ${parseInt(
    date.slice(5, 7),
  )}월 ${parseInt(date.slice(8))}일`;
  const loca = useLocation().pathname.split('/')[1];
  const postNum = useLocation().pathname.split('/')[2];

  const { accountname } = useAuth();
  const { openBottomSheet, updateBottomSheet } = useBottomSheet();
  const { functionModal } = useModal();

  const deletePostMutate = useDeletePostMutation(post.id);
  const reportPostMutate = useReportPostMutation(post.id);

  const handleMoreClick = () => {
    openBottomSheet();
    if (post.author.accountname === accountname) {
      const onPostDelete = () => {
        functionModal(
          '해당 게시물을 삭제할까요?',
          '삭제',
          '게시물이 삭제되었습니다',
          '확인',
          async () => await deletePostMutate.mutateAsync(),
          () => {
            if (loca === 'post') {
              navigate(`/profile/${accountname}`);
            }
          },
        );
      };
      const onPostEdit = () => {
        navigate('/editpost', {
          state: {
            post_id: post.id,
          },
        });
      };
      updateBottomSheet([
        ['삭제', onPostDelete],
        ['수정', onPostEdit],
      ]);
    } else {
      const onPostReport = () => {
        functionModal(
          '해당 게시물을 신고할까요?',
          '신고',
          '게시물이 신고되었습니다',
          '확인',
          async () => await reportPostMutate.mutateAsync(),
        );
        updateBottomSheet([['신고', onPostReport]]);
      };
    }
  };

  return (
    <>
      {loca === 'post' && postNum === post.id && (
        <Helmet>
          <title>
            {post.content.length === 0
              ? `@${post.author.accountname}님의 Spport 사진 • ${displayDate}`
              : post.content.length >= 50
              ? `${post.content.slice(0, 50)} ... | Spport`
              : `${post.content} | Spport`}
          </title>
        </Helmet>
      )}

      <PostStyle>
        <PostProfile author={post.author} onMoreClick={handleMoreClick} />
        <div className='post-wrapper'>
          {isTeam ? <GamePost post={post} /> : <RegularPost post={post} />}
          <BtnGroup
            id={post.id}
            hearted={post.hearted}
            heartCount={post.heartCount}
            commentCount={post.commentCount}
            isTeam={isTeam}
            post={post}
          />
          <time className='post-time' dateTime={date}>
            {displayDate}
          </time>
        </div>
      </PostStyle>
    </>
  );
}

export default React.memo(Post);
