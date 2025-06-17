import EmojiContainer from './emoji/EmojiContainer';
import EmojiResultBlock from './emoji/EmojiResultBlock';
import Button from './base/Button';
import useVoteState from './hooks/useVoteState';

export default function Modal() {
  const { currentState, vote, resetState, result } = useVoteState();

  return (
    <>
      <div className="modal-container">
        <h3>Голосування за найкращий смайлик</h3>
        <EmojiContainer onClick={vote} state={currentState}></EmojiContainer>
        {!currentState.isVisible && (
          <Button
            value="Показати результат"
            className="show-result-btn"
            onClick={result}
          ></Button>
        )}
        {currentState.isVisible && (
          <Button
            value="Очистити результати"
            className="reset-result-btn"
            onClick={resetState}
          ></Button>
        )}
        {currentState.isVisible && (
          <EmojiResultBlock state={currentState}></EmojiResultBlock>
        )}
      </div>
    </>
  );
}
