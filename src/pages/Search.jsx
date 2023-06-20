import React, { useState, useEffect } from 'react';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/atom';
import UserList from '../components/List/UserList';
import { useParams } from 'react-router-dom';
import { getSearchAPI } from '../api/SearchAPI';

export default function Search() {
  const [searchUser, setSearchUser] = useState([]);
  const [token, setToken] = useRecoilState(userToken);
  const { keyword } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchAPI(token, keyword);
      setSearchUser(data);
    };
    if (keyword === undefined) {
      setSearchUser([]);
    } else {
      getData();
    }
  }, [keyword]);
  return (
    <>
      <Header search />
      <main>
        {searchUser.length > 0 && <UserList searchUser={searchUser} />}
      </main>
      <NavBar />
    </>
  );
}
