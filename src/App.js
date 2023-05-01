import React from "react";
import { useState } from "react";

import SearchInput from "./components/SearchInput";
import UsersList from "./components/UsersList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="flex flex-col justify-between h-screen max-h-fit box-border">
      <NavBar />
      <SearchInput setUsers={setUsers} />
      <UsersList users={users} />
      <Footer />
    </div>
  );
}

export default App;
