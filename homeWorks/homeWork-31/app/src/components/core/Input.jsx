export default function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
  );
}
