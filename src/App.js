import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Feed from "./pages/Feed";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
