import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameInfoByTeam } from '../api/GameAPI/TeamProfileGameAPI';
import GameList from '../components/List/GameList';

export default function Profile() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await getGameInfoByTeam(id);
      setGame(data);
    };
    getData();
  }, []);
  return (
    <>
      <section className='section-game'>
        <GameList games={game} />
      </section>
    </>
  );
}
