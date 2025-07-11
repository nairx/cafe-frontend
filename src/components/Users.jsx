import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchUsers = async () => {
    try {
      setError("Loading...");
      const url = `${API_URL}/api/users/`;
      const result = await axios.get(url);
      setUsers(result.data);
      setError();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <div>
      {users.map((value) => (
        <li key={value._id}>{value.firstName}</li>
      ))}
    </div>
  );
}
