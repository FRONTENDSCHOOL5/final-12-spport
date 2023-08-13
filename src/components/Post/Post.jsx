import React from 'react';
import PostProfile from './PostProfile';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GamePost from './GamePost';
import RegularPost from './RegularPost';
import BtnGroup from './BtnGroup';
import { useRecoilState } from 'recoil';
import {
  isBottomSheetOpen,
  bottomSheetItems,
} from '../../atom/bottomSheetAtom';
import { accountname, userToken } from '../../atom/loginAtom';
import { isModalOpen, modalItems } from '../../atom/modalAtom';
import {
  useDeletePostMutation,
  useReportPostMutation,
} from '../../hook/usePost';

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

export default function Post({ post }) {
  const navigate = useNavigate();
  const isTeam = post.author.accountname.startsWith('SPORT_');
  const date = isTeam
    ? post.content.split(',')[0]
    : post.createdAt.slice(0, 10);
  const displayDate = `${date.slice(0, 4)}년 ${parseInt(
    date.slice(5, 7),
  )}월 ${parseInt(date.slice(8))}일`;
  const loca = useLocation().pathname.split('/')[1];

  const [token, setToken] = useRecoilState(userToken);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [bsItems, setBsItems] = useRecoilState(bottomSheetItems);
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);

  const deletePostMutate = useDeletePostMutation(token, post.id);
  const reportPostMutate = useReportPostMutation(token, post.id);

  const handleMoreClick = () => {
    setIsBsOpen(true);
    if (post.author.accountname === accountName) {
      const onPostDelete = () => {
        setIsModal(true);
        const deletePost = async () => {
          await deletePostMutate.mutateAsync();
          setIsModal(true);
          setModalItem([
            '게시물이 삭제되었습니다',
            '확인',
            function () {
              if (loca === 'post') {
                navigate(-1);
              } else {
                location.reload();
              }
            },
          ]);
        };
        setModalItem(['해당 게시물을 삭제할까요?', '삭제', deletePost]);
      };
      const onPostEdit = () => {
        navigate('/editpost', {
          state: {
            post_id: post.id,
          },
        });
      };
      const postItems = [
        ['삭제', onPostDelete],
        ['수정', onPostEdit],
      ];
      setBsItems(postItems);
    } else {
      const onPostReport = () => {
        setIsModal(true);
        const reportPost = async () => {
          await reportPostMutate.mutateAsync();
          setIsModal(true);
          setModalItem(['게시물이 신고되었습니다', '확인', function () {}]);
        };
        setModalItem(['해당 게시물을 신고할까요?', '신고', reportPost]);
      };
      const postItems = [['신고', onPostReport]];
      setBsItems(postItems);
    }
  };

  return (
    <>
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
