import React from 'react';
import UserListItem from './UserListItem';
import styled from 'styled-components';

const UserListStyle = styled.ul`
  padding: 70px 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// user-search <ListItem user={user} />
// team-search <ListItem user={user} />
// user-follow <ListItem user={user} onFollowClick={} follow/>
// team-follow <ListItem user={user} onFollowClick={} follow/>

export default function UserList({ searchUser }) {
  return (
    <UserListStyle>
      {searchUser.map((user) => {
        return (
          <li key={user._id}>
            <UserListItem user={user} />
          </li>
        );
      })}
    </UserListStyle>
  );
}
