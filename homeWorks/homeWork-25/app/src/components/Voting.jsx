import React from 'react';
import Modal from './Modal';
import EmojiResultBlock from './emoji/EmojiResultBlock';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.voting = JSON.parse(localStorage.getItem('voting'));

    this.state = this.voting || {
      angry: 0,
      smile: 0,
      upside: 0,
      sunglasses: 0,
      laughing: 0,
      isVisible: false,
    };
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('voting', JSON.stringify(this.state));
    }
  }

  toggleBlock = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  vote(emojiKey) {
    this.setState((prevState) => {
      const newVote = (prevState[emojiKey] || 0) + 1;
      return {
        [emojiKey]: newVote,
      };
    });
  }

  result() {
    console.log('i am show result');

    // const maxValue = Math.max(...Object.values(this.state));
    // console.log(maxValue);

    // const [winnerKey, winnerValue] = Object.entries(this.state).reduce(
    //   (previousValue, currentValue) =>
    //     currentValue[1] > previousValue[1] ? currentValue : previousValue
    // );

    // console.log('Winner:', winnerKey);
    // console.log('Votes:', winnerValue);
  }

  resetState() {
    localStorage.removeItem('voting');
    location.reload();
  }

  render() {
    console.log('QA', this.state);
    const { isVisible } = this.state;

    return (
      <>
        <Modal
          onClickEmoji={this.vote.bind(this)}
          onClickShowResult={this.toggleBlock.bind(this)}
          onClickResetState={this.resetState}
          state={this.state}
        ></Modal>
        {isVisible && <EmojiResultBlock></EmojiResultBlock>}
      </>
    );
  }
}
