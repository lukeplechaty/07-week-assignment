import { useState } from "react";
import { useNavigate, Link } from "react-router";

export default function NewUser() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
    passwordTest: "",
  });
  function handleData(event) {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (userdata.password === userdata.passwordTest) {
      const res = await fetch(import.meta.env.VITE_API_URL + "/addNewUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });
      const jsonData = await res.json();
      if (jsonData.added) {
        navigate(`/login`);
      } else if (jsonData.error == "used") alert("Username is in use");
    } else alert("Passwords need to mach");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Acount</legend>
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
          <label htmlFor="passwordTest">Repeat Password:</label>
          <input
            type="password"
            name="passwordTest"
            required
            value={userdata.passwordTest}
            onChange={handleData}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
