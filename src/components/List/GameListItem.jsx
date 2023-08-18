import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileImage50 } from '../Common/ProfileImage';
import SButton from '../Common/Button/SButton';
import { accountname } from '../../atom/loginAtom';
import { useRecoilState } from 'recoil';
import { isModalOpen, modalItems } from '../../atom/modalAtom';
import { useLikeMutation, useUnlikeMutation } from '../../hook/useLike';
import { GET_API } from '../../api/CommonAPI';

const ListItemStyle = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  .img-ListItem {
    width: 42px;
    border-radius: 50px;
    border: 0.5px solid var(--color-steelblue);
  }
  a {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .teams {
    color: var(--color-navy);
    font-size: 14px;
    display: inline-block;
    margin-bottom: 3px;
  }
  .game-info {
    color: var(--color-steelblue);
    font-size: 12px;
  }
  button {
    margin-left: auto;
  }
`;

export default function GameListItem({ game }) {
  const game_info = game[0];
  const game_id = game[1];
  const [isLike, setIsLike] = useState(false);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);
  const useLikeMutate = useLikeMutation(setIsLike);
  const useUnlikeMutate = useUnlikeMutation(accountName, setIsLike);

  useEffect(() => {
    const setLike = async () => {
      const response = await GET_API(`/post/${game_id[0]}`);
      setIsLike(response.post.hearted);
    };
    setLike();
  }, []);

  const likeModal = () => {
    setIsModal(true);
    const likeGame = async () => {
      await useLikeMutate.mutate({
        ids: game_id,
        isTeam: true,
        post: game[0],
        isGame: true,
      });
      setIsModal(true);
      setModalItem(['해당 일정이 추가되었습니다.', '확인', function () {}]);
    };
    setModalItem(['해당 일정을 추가하시겠습니까?', '추가', likeGame]);
  };

  const unlikeModal = () => {
    setIsModal(true);
    const unlikeGame = async () => {
      await useUnlikeMutate.mutate({ ids: game_id, isTeam: true });
      setIsModal(true);
      setModalItem(['해당 일정이 삭제되었습니다.', '확인', function () {}]);
    };
    setModalItem(['해당 일정을 삭제하시겠습니까?', '삭제', unlikeGame]);
  };

  const onLikeClick = async () => {
    if (isLike) {
      unlikeModal();
    } else {
      likeModal();
    }
  };

  return (
    <ListItemStyle className='list-item' key={game_id[0]}>
      <ProfileImage50 image={game_info.image} />
      <div>
        <span className='teams'>
          {game_info.home} vs. {game_info.away}
        </span>
        <br />
        <span className='game-info'>
          {game_info.date} ({game_info.day}) {game_info.time} in{' '}
          {game_info.stadium}
        </span>
      </div>
      {isLike ? (
        <SButton text='취소' func={onLikeClick} active />
      ) : (
        <SButton text='추가' func={onLikeClick} />
      )}
    </ListItemStyle>
  );
}
