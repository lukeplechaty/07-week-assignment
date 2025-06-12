export default function Message(props) {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.message}</p>
    </div>
  );
}
