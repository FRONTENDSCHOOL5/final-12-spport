import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const PostSectionStyle = styled.section`
  padding: 70px 20px 20px;
`;

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [game, setGame] = useState([]);
  const [comment, setComment] = useState([]);
  const [isTeam, setIsTeam] = useState(false);

  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  useEffect(() => {
    const getData = async () => {
      const data = await getPostDetailAPI(test_token, id);
      const cmtData = await getCommentAPI(test_token, id);
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
