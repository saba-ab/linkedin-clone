import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Feed from "./pages/Feed";
import Error from "./components/Error";
import Profile from "./pages/Profile";
import { useState } from "react";
import { userContext, userListContext } from "./Context";

function App() {
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  const [userList, setUserList] = useState([]);

  return (
    <>
      <userListContext.Provider value={{ userList, setUserList }}>
        <userContext.Provider value={{ currentUserInfo, setCurrentUserInfo }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </userContext.Provider>
      </userListContext.Provider>
    </>
  );
}

export default App;
