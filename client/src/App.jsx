import "./App.css";
import { Routes, Route } from "react-router";
import Messages from "./components/Messages";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Profile from "./components/Profile";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/messages"} element={<Messages user={user} />} />
        <Route path={"/login"} element={<Login setuser={setUser} />} />
        <Route path={"/newuser"} element={<NewUser />} />
        <Route
          path={"/profile/:username"}
          element={<Profile setuser={setUser} />}
        />
      </Routes>
    </>
  );
}
