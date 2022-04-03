import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PrivateOutlet from "./Components/PrivateOutlet";
import AllRooms from "./Pages/AllRooms";
import MyRooms from "./Pages/MyRooms";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/private" element={<PrivateOutlet />}>
          <Route path="/private/allrooms" element={<AllRooms />}></Route>
          <Route path="/private/myrooms" element={<MyRooms />}></Route>
          <Route path="/private/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
