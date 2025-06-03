export default function EmojiResultBlock(props) {
  return (
    <>
      <div className="emoji-result-block">
        <p>Результати голосування:</p>
        <span>Переможець:</span>
        <i className={props.className}></i>
        <p>
          Кількість голосів:<span>{props.result}12</span>
        </p>
      </div>
    </>
  );
}
