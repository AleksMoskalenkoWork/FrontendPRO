export default function Emoji(props) {
  return (
    <>
      <i className={props.className} key={props.key} onClick={props.onClick}>
        <span className={props.classNameEmojiResult}>{props.result}</span>
      </i>
    </>
  );
}
