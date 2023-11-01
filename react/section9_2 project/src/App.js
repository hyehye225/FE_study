import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  console.log(userList);
  return (
    <div>
      <AddUser setUserList={setUserList} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
