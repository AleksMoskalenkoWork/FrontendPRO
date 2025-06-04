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
        {!props.state.isVisible && (
          <Button
            value="Показати результат"
            className="show-result-btn"
            onClick={props.onClickShowResult}
          ></Button>
        )}
        {props.state.isVisible && (
          <Button
            value="Очистити результати"
            className="reset-result-btn"
            onClick={props.onClickResetState}
          ></Button>
        )}
        {props.state.isVisible && (
          <EmojiResultBlock state={props.state}></EmojiResultBlock>
        )}
      </div>
    </>
  );
}
