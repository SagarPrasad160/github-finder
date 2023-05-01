import React from "react";
import { useState } from "react";
import { fetchUsers } from "../api";

function SearchInput({ setUsers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await fetchUsers(searchTerm);
    console.log(users);
    setUsers(users);
  };

  return (
    <div className="p-2 flex flex-col sm:flex-row items-center">
      <form className="w-full sm:w-auto flex-grow" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <button type="submit" className="p-2 rounded ml-0 sm:ml-3 btn btn-lg">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
