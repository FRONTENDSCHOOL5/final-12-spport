import React, { useState, useEffect } from 'react';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';
import UserList from '../components/List/UserList';
import { useParams } from 'react-router-dom';
import { getSearchAPI } from '../api/SearchAPI';

const MainStyle = styled.main`
  height: 100%;
`;

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
      <MainStyle>
        {searchUser.length > 0 && <UserList searchUser={searchUser} />}
      </MainStyle>
      <NavBar page='홈' />
    </>
  );
}
