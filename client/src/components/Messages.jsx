import { useEffect, useState } from "react";
import NewMessageForm from "./NewMessageForm";
import Message from "./Message";

export default function Messages() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getMessage() {
      const res = await fetch(import.meta.env.VITE_API_URL + "/getMessages");
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
    <div>
      {data.map((items) => {
        return <Message key={items.id} data={items} />;
      })}
      <NewMessageForm />
    </div>
  );
}
