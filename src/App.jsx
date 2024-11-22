import React, { useState } from "react";
import { getUsers, deleteUser } from "./apiMethods";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const isDeleted = await deleteUser(id);
      if (isDeleted) {
        setUsers(users.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <button onClick={fetchUsers}>Get Users</button>
      <FilterBox filter={filter} onFilterChange={handleFilterChange} />
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
}

export default App;
