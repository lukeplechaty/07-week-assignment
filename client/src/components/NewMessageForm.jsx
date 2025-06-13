import { useState } from "react";

export default function NewMessageForm(props) {
  const [data, setData] = useState({
    name: props.username ? props.username : "",
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
      name: props.username ? props.username : "",
      message: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Message</legend>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          required
          value={data.name}
          onChange={handleData}
        />
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
