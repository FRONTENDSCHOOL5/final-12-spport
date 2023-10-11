import React, { useState } from 'react';
import iconEmptyHeart from '../../assets/image/icon-heart-empty.svg';
import iconFillHeart from '../../assets/image/icon-heart-fill.svg';
import iconMessage from '../../assets/image/icon-message-small.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLikeMutation, useUnlikeMutation } from '../../hooks/useLike';
import useAuth from '../../hooks/useAuth';

const BtnWrapperStyle = styled.div`
  text-align: start;
  display: flex;
  gap: 18px;
  line-height: normal;
  .btn-like,
  .comment {
    font-size: 12px;
    display: flex;
    align-items: center;
    img {
      margin-right: 6px;
    }
  }
`;

export default function BtnGroup({
  id,
  hearted,
  heartCount,
  commentCount,
  isTeam,
  post,
}) {
  const [isLike, setIsLike] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const { accountname } = useAuth();
  const useLikeMutate = useLikeMutation(setIsLike, setLikeCount);
  const useUnlikeMutate = useUnlikeMutation(
    accountname,
    setIsLike,
    setLikeCount,
  );

  const handleLikeClick = async () => {
    if (isLike) {
      useUnlikeMutate.mutate({ ids: [id], isTeam: isTeam });
    } else {
      useLikeMutate.mutate({ ids: [id], isTeam: isTeam, post: post });
    }
  };

  return (
    <BtnWrapperStyle className='btn-wrapper'>
      <button className='btn-like' onClick={handleLikeClick}>
        <span className='a11y-hidden'>좋아요 버튼</span>
        <img src={isLike ? iconFillHeart : iconEmptyHeart} alt='' />
        <span className='num-like'>{likeCount}</span>
      </button>
      <Link to={`/post/${id}`}>
        <div className='comment'>
          <img src={iconMessage} alt='댓글 달기 버튼' />
          <span className='num-comment'>{commentCount}</span>
        </div>
      </Link>
    </BtnWrapperStyle>
  );
}
