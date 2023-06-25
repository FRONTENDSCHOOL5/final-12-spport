import React, { useState, useEffect } from 'react';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userToken } from '../atom/loginAtom';
import UserList from '../components/List/UserList';
import { useParams } from 'react-router-dom';
import { getSearchAPI } from '../api/SearchAPI';
import ListLoader from '../components/Skeleton/ListLoader';

const MainStyle = styled.main`
  height: 100%;
`;

export default function Search() {
  const [searchUser, setSearchUser] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [token, setToken] = useRecoilState(userToken);
  const { keyword } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoad(true);
      const data = await getSearchAPI(token, keyword);
      setSearchUser(data);
      setIsLoad(false);
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
        {isLoad ? <ListLoader /> : <UserList searchUser={searchUser} />}
      </MainStyle>
      <NavBar page='홈' />
    </>
  );
}
