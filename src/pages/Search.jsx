import React, { useState, useEffect } from 'react';
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import UserList from '../components/List/UserList';
import { useParams } from 'react-router-dom';
import { getSearchAPI } from '../api/SearchAPI';
import ListLoader from '../components/Skeleton/ListLoader';
import Empty from '../components/Common/Empty';

const MainStyle = styled.main`
  height: 100%;
`;

export default function Search() {
  const [searchUser, setSearchUser] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const { keyword } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoad(true);
      const data = await getSearchAPI(keyword);
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
        {!isLoad && searchUser.length === 0 && (
          <Empty message='검색된 유저가 없습니다.' />
        )}
        {isLoad ? <ListLoader /> : <UserList searchUser={searchUser} />}
      </MainStyle>
      <NavBar page='홈' />
    </>
  );
}
