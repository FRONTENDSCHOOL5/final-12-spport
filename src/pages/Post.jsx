import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostDetailAPI } from '../api/GameAPI/PostGameAPI';
import { arrToGame } from '../api/GameAPI/AddGameAPI';
import {
  writeCommentAPI,
  getCommentAPI,
  deleteCommentAPI,
} from '../api/CommentAPI';
import CommentList from '../components/Comment/CommentList';
import PostDetail from '../components/Post/Post';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/atom';

const PostSectionStyle = styled.section`
  padding: 70px 20px 20px;
`;

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [game, setGame] = useState([]);
  const [comment, setComment] = useState([]);
  const [isTeam, setIsTeam] = useState(false);
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getPostDetailAPI(token, id);
      const cmtData = await getCommentAPI(token, id);
      if(data.status === 404) {
        navigate('/error');
        return;
      }
      setPost(data.post);
      setGame(arrToGame(data.post.content.split(',')));
      setIsTeam(data.post.author.accountname.startsWith('SPORT_'));
      setComment(cmtData.comments);
    };
    getData();
  }, []);
  return (
    <>
      <Header text />
      <main>
        <PostSectionStyle>
          {isTeam && <PostDetail post={post} game={game} />}
        </PostSectionStyle>
      </main>
      <section>
        {comment && <CommentList comments={comment.reverse()} />}
      </section>
    </>
  );
}
