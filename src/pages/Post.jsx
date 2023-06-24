import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostDetailAPI } from '../api/GameAPI/PostGameAPI';
import { getCommentAPI } from '../api/PostAPI.js/CommentAPI';
import CommentList from '../components/Comment/CommentList';
import PostDetail from '../components/Post/Post';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';

const MainStyle = styled.main`
  height: 100vh;
`;

const PostSectionStyle = styled.section`
  padding: 70px 20px 20px;
`;

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getPostDetailAPI(token, id);
      const cmtData = await getCommentAPI(token, id);
      if (data.status === 404) {
        navigate('/error');
        return;
      }
      setPost(data.post);
      setComment(cmtData.comments);
    };
    getData();
  }, []);
  return (
    <>
      <Header text />
      <MainStyle>
        <PostSectionStyle>
          {Object.keys(post).length > 0 && <PostDetail post={post} />}
        </PostSectionStyle>
        <section>{comment && <CommentList comments={comment} post_id={post.id}/>}</section>
      </MainStyle>
    </>
  );
}
