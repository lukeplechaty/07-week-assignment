import { Link } from "react-router";
export default function NavBar() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/messages"}>Messages</Link>
    </nav>
  );
}
