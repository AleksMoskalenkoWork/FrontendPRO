function Textarea(props) {
  return (
    <textarea
      rows={props.rows}
      cols={props.cols}
      placeholder={props.placeholder}
      className={props.className}
    ></textarea>
  );
}

export default Textarea;
