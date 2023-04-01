import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <>
          <p>No users available.</p>
          <Link to="/users/new">
            <button>Add User</button>
          </Link>
        </>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
