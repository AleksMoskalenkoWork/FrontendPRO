export default function EmojiResultBlock(props) {
  return (
    <>
      {props.state.result.votes !== 0 && (
        <div className="emoji-result-block">
          <p>Результати голосування:</p>
          <span>Переможець:</span>
          <div>
            <i className={props.state.result.className}></i>
          </div>
          <p>
            Кількість голосів:<span>{props.state.result.votes}</span>
          </p>
        </div>
      )}
      {props.state.result.votes === 0 && (
        <div className="emoji-result-block">
          <p>Результатів голосування не має!</p>
        </div>
      )}
    </>
  );
}
