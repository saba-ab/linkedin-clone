import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Feed from "./pages/Feed";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
