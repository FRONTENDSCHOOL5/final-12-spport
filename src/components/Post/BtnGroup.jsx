import React, { useState, useEffect } from 'react';
import iconEmptyHeart from '../../assets/image/icon-heart-empty.svg';
import iconFillHeart from '../../assets/image/icon-heart-fill.svg';
import iconMessage from '../../assets/image/icon-message-small.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { likeGameAPI, unlikeGameAPI } from '../../api/GameAPI/LikeGameAPI';
import { useRecoilState } from 'recoil';
import { userToken } from '../../atom/atom';

const BtnWrapperStyle = styled.div`
  text-align: start;
  display: flex;
  gap: 18px;
  .btn-like {
    font-size: 12px;
    display: flex;
    align-items: center;
    img {
      margin-right: 6px;
    }
  }
  .btn-comment {
    font-size: 12px;
    display: flex;
    align-items: center;
    img {
      margin-right: 6px;
    }
  }
`;

export default function BtnGroup({ id, hearted, heartCount, commentCount }) {
  const [isLike, setIsLike] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const [cmtCount, setCmtCounter] = useState(commentCount);
  const [token, setToken] = useRecoilState(userToken);

  const handleLikeClick = async () => {
    if (isLike) {
      console.log('unlike');
      const unlike = await unlikeGameAPI(token, [id]);
      setIsLike(unlike[0].post.hearted);
      setLikeCount(unlike[0].post.heartCount);
    } else {
      console.log('like');
      const like = await likeGameAPI(token, [id]);
      setIsLike(like[0].post.hearted);
      setLikeCount(like[0].post.heartCount);
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
        <button type='button' className='btn-comment'>
          <img src={iconMessage} alt='댓글 달기 버튼' />
          <span className='num-comment'>{cmtCount}</span>
        </button>
      </Link>
    </BtnWrapperStyle>
  );
}
