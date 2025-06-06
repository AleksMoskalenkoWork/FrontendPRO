import Emoji from './Emoji';

export default function EmojiContainer(props) {
  return (
    <>
      <div className="emoji-container">
        <Emoji
          className="bi bi-emoji-angry-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.angry}
          onClick={() => props.onClick('angry')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-smile-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.smile}
          onClick={() => props.onClick('smile')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-smile-upside-down-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.upside}
          onClick={() => props.onClick('upside')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-sunglasses-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.sunglasses}
          onClick={() => props.onClick('sunglasses')}
        ></Emoji>
        <Emoji
          className="bi bi-emoji-laughing-fill icon"
          classNameEmojiResult="emoji-result"
          result={props.state.laughing}
          onClick={() => props.onClick('laughing')}
        ></Emoji>
      </div>
    </>
  );
}
