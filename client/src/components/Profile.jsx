import { useNavigate } from "react-router";
import "./Profile.css";

export default function Profile(props) {
  const navigate = useNavigate();
  function logout() {
    props.setuser(null);
    navigate("/");
  }
  return (
    <div className="profile">
      <h1 className="profile-h1">Profile</h1>
      <button className="profile-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
