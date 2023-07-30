import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../components/Comment/CommentList';
import PostDetail from '../components/Post/Post';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';
import { PostDetailLoader } from '../components/Skeleton/PostLoader';
import { usePostQuery } from '../hook/usePost';
import { useCommentQuery } from '../hook/useComment';

const MainStyle = styled.main`
  height: 100%;
`;

const PostSectionStyle = styled.section`
  padding: 70px 20px 20px;
`;

export default function Post() {
  const { id } = useParams();
  const [token] = useRecoilState(userToken);
  const [post, isPostLoading, isPostError] = usePostQuery(token, id);
  const [comment, isCommentLoading, isCommentError] = useCommentQuery(
    token,
    id,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isPostError || isCommentError) {
      navigate('/error');
    }
  }, []);

  return (
    <>
      <Header text />
      <MainStyle>
        {isPostLoading || isCommentLoading ? (
          <PostDetailLoader />
        ) : (
          <>
            <PostSectionStyle>
              {Object.keys(post.post).length > 0 && (
                <PostDetail post={post.post} />
              )}
            </PostSectionStyle>
            <section>
              {comment.comments.length > 0 && (
                <CommentList
                  comments={comment.comments}
                  post_id={post.post.id}
                />
              )}
            </section>
          </>
        )}
      </MainStyle>
    </>
  );
}
