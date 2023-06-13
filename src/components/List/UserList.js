import React from 'react';
import UserListItem from './UserListItem';

// user-search <ListItem user={user} />
// team-search <ListItem user={user} />
// user-follow <ListItem user={user} onFollowClick={} follow/>
// team-follow <ListItem user={user} onFollowClick={} follow/>

export default function UserList({ users, follow }) {
  return (
    <ul>
      {users.map((user) => {
        <li key={user.accountname}>
          <UserListItem user={user} follow={follow} />
        </li>;
      })}
    </ul>
  );
}
