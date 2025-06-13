import { Link } from "react-router";
import "./NavBar.css";
export default function NavBar(props) {
  return (
    <nav>
      <Link className="link-1 link" to={"/"}>
        Home
      </Link>
      <Link className="link-2 link" to={"/messages"}>
        Messages
      </Link>
      {!props.user ? (
        <Link className="link-3 link" to={"/login"}>
          Login
        </Link>
      ) : (
        <Link className="link-3 link" to={`/profile/:${props.user.username}`}>
          {props.user.username}
        </Link>
      )}
    </nav>
  );
}
