import React from "react";

const UserItem = ({ user, onDelete }) => {
  return (
    <li>
      {user.first_name} {user.last_name}
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
