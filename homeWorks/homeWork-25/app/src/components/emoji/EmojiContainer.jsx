import Emoji from './Emoji';

export default function EmojiContainer(props) {
  return (
    <>
      <div className="emoji-container">
        <Emoji
          className="bi bi-emoji-angry-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.angryVote}
          onClick={() => props.onClick('angry')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-smile-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.smileVote}
          onClick={() => props.onClick('smile')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-smile-upside-down-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.upsideVote}
          onClick={() => props.onClick('upside')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-sunglasses-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.sunglassesVote}
          onClick={() => props.onClick('sunglasses')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-laughing-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.laughingVote}
          onClick={() => props.onClick('laughing')}
        ></Emoji>
      </div>
    </>
  );
}
