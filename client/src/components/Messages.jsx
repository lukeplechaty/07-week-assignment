import { useEffect, useState } from "react";
import NewMessageForm from "./NewMessageForm";
import Message from "./Message";
import "./Messages.css";

export default function Messages(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getMessage() {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/getMessages`);
      const jsonData = await res.json();
      setData(jsonData);
    }
    getMessage();
    const intervalId = setInterval(getMessage, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="messages">
      <div
        className={
          "messages-msg " + (props.user ? "messages-msg-1" : "messages-msg-2")
        }
      >
        {data
          ? data.map((items) => {
              return <Message key={items.id} data={items} user={props.user} />;
            })
          : null}
      </div>
      {props.user ? <NewMessageForm user={props.user} /> : null}
    </div>
  );
}
