import { useNavigate } from "react-router";
export default function Profile(props) {
  const navigate = useNavigate();
  function logout() {
    props.setuser(null);
    navigate("/");
  }
  return (
    <>
      <h1>Profile</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
