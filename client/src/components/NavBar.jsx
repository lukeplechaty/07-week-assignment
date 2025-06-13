import { Link } from "react-router";
export default function NavBar(props) {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/messages"}>Messages</Link>
      {!props.user ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <Link to={`/profile/:${props.user.username}`}>
          {props.user.username}
        </Link>
      )}
    </nav>
  );
}
