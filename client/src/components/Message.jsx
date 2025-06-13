import { useState } from "react";
import "./Message.css";

export default function Message(props) {
  const [likes, setLikes] = useState(props.data.likes);
  function updateLikes() {
    let temp = likes + 1;
    setLikes(temp);
    fetch(
      `${import.meta.env.VITE_API_URL}/updateMessage/${props.data.id}/${temp}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  function deleteMsg() {
    fetch(`${import.meta.env.VITE_API_URL}/deleteMessage/${props.data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <div className="message">
      <h2>{props.data.name}</h2>
      <p>{props.data.message}</p>
      <button onClick={updateLikes}>Likes {likes}</button>
      {props.user ? (
        props.user.id == props.data.user_id ? (
          <button onClick={deleteMsg}>DELETE</button>
        ) : null
      ) : null}
    </div>
  );
}
