export default function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.value}
    </button>
  );
}
