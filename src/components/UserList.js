import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default UserList;
