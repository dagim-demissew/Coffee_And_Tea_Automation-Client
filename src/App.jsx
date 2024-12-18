import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import User from "./pages/User/User.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Admin from "./pages/Admin/Admin.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
