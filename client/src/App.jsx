import "./App.css";
import { Routes, Route } from "react-router";
import Messages from "./components/Messages";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/messages"} element={<Messages />} />
      </Routes>
    </>
  );
}
