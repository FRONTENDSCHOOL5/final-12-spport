import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../components/Comment/CommentList';
import PostDetail from '../components/Post/Post';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { PostDetailLoader } from '../components/Skeleton/PostLoader';
import { usePostQuery } from '../hook/usePost';
import { useCommentQuery } from '../hook/useComment';
import NavBar from '../components/Common/NavBar';

const MainStyle = styled.main`
  height: 100%;
`;

const PostSectionStyle = styled.section`
  padding: 70px 20px 20px;
  display: flex;
  justify-content: center;
`;

export default function Post() {
  const { id } = useParams();
  const {post, isPostLoading, isPostError, postRefetch} = usePostQuery(id);
  const [comment, isCommentLoading, isCommentError] = useCommentQuery(id);
  const [isFetch, setIsFetch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPostError || isCommentError) {
      navigate('/error');
    }
  }, []);

  useEffect(() => {
    const refetch = async () => {
      setIsFetch(false);
      const data = await postRefetch();
      setIsFetch(true);
      return data;
    };
    refetch();
  }, [id]);

  return (
    <>
      <Header text />
      <MainStyle>
        {isPostLoading || isCommentLoading || !isFetch ? (
          <PostDetailLoader />
        ) : (
          <>
            <h1 className='a11y-hidden'>
              {post.post.author.username}님의 게시글 상세 페이지
            </h1>
            <PostSectionStyle>
              <h2 className='a11y-hidden'>게시글 내용</h2>
              {Object.keys(post.post).length > 0 && (
                <PostDetail post={post.post} />
              )}
            </PostSectionStyle>
            <section>
              <h2 className='a11y-hidden'>댓글 목록</h2>
              <CommentList comments={comment.comments} post_id={post.post.id} />
            </section>
          </>
        )}
      </MainStyle>
      <NavBar />
    </>
  );
}
