import { useState } from "react";
import { useNavigate, Link } from "react-router";
import "./Login.css";

export default function Login(props) {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
  });
  function handleData(event) {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(import.meta.env.VITE_API_URL + "/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
    });
    const jsonData = await res.json();
    if (jsonData.get) {
      props.setuser({ username: jsonData.username, id: jsonData.id });
      navigate(`/profile/${userdata.username}`);
    } else alert("Wrong Username or Password");
  }
  return (
    <div className="login-win">
      <form onSubmit={handleSubmit}>
        <fieldset className="login-form">
          <legend>Login</legend>
          <label htmlFor="username">User Name: </label>
          <input
            type="text"
            name="username"
            required
            value={userdata.username}
            onChange={handleData}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            value={userdata.password}
            onChange={handleData}
          />
          <button type="submit">Submit</button>
          <Link className="login-link" to={"/newuser"}>
            Make New Acount
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
