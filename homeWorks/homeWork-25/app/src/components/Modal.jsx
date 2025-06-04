import EmojiContainer from './emoji/EmojiContainer';
import EmojiResultBlock from './emoji/EmojiResultBlock';
import Button from './base/Button';

export default function Modal(props) {
  return (
    <>
      <div className="modal-container">
        <h3>Голосування за найкращий смайлик</h3>
        <EmojiContainer
          onClick={props.onClickEmoji}
          state={props.state}
        ></EmojiContainer>
        <Button
          value="Показати Результат"
          className="show-result-btn"
          onClick={props.onClickShowResult}
        ></Button>
        <Button
          value="Оновити Результат"
          className="reset-result-btn"
          onClick={props.onClickResetState}
        ></Button>
      </div>
    </>
  );
}
