import { useState } from "react";
import "./NewMessageForm.css";

export default function NewMessageForm(props) {
  const [data, setData] = useState({
    name: props.user.username,
    id: props.user.id,
    message: "",
  });
  function handleData(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/addMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setData({
      name: props.user.username,
      id: props.user.id,
      message: "",
    });
  }
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <fieldset className="message-in-form">
        <legend>New Message</legend>
        <label htmlFor="name">Name: {data.name}</label>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          required
          value={data.message}
          onChange={handleData}
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
