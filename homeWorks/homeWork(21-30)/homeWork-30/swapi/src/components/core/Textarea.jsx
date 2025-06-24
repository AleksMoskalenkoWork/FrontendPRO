function Textarea(props) {
  return (
    <textarea
      rows={props.rows}
      cols={props.cols}
      placeholder={props.placeholder}
      value={props.value}
      className={props.className}
      readOnly={props.readOnly}
    ></textarea>
  );
}

export default Textarea;
