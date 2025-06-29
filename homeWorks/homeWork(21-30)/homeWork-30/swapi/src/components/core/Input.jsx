function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
    />
  );
}

export default Input;
