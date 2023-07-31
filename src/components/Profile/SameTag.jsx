import React, { useState, useEffect } from 'react';
import { getSearchAPI } from '../../api/SearchAPI';
import { useRecoilState } from 'recoil';
import { userToken } from '../../atom/loginAtom';
import { useParams } from 'react-router-dom';
import Empty from '../Common/Empty';
import ListLoader from '../Skeleton/ListLoader';
import UserList from '../List/UserList';
import Header from '../Common/Header/Header';
import NavBar from '../Common/NavBar';

export default function SameTag() {
  const [searchUser, setSearchUser] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [token, setToken] = useRecoilState(userToken);
  const keyword = '&npsp;&skip=10000&limit=10000';
  const { tag } = useParams();

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
  console.log(searchUser);
  console.log(tag);

  const sameTagGroup = searchUser
    .filter((item) => {
      return typeof item.intro === 'string';
    })
    .filter((item) => {
      return item.intro.split(', ').includes(tag);
    });

  return (
    <>
      <Header text={tag} />
      {!isLoad && sameTagGroup.length === 0 && (
        <Empty message={`${tag} 태그를 가진 유저가 없습니다.`} />
      )}
      {isLoad ? <ListLoader /> : <UserList searchUser={sameTagGroup} />}
      <NavBar />
    </>
  );
}
