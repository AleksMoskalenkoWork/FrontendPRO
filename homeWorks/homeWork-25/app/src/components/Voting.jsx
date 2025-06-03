import React from 'react';
import Modal from './Modal';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.voting = JSON.parse(localStorage.getItem('voting'));

    this.state = this.voting || {
      angryVote: 0,
      smileVote: 0,
      upsideVote: 0,
      sunglassesVote: 0,
      laughingVote: 0,
    };
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('voting', JSON.stringify(this.state));
    }
  }

  vote(emojiKey) {
    this.setState((prevState) => {
      const newVote = (prevState[`${emojiKey}Vote`] || 0) + 1;
      return {
        [`${emojiKey}Vote`]: newVote,
      };
    });
  }

  showResult() {
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

    return (
      <Modal
        onClickEmoji={this.vote.bind(this)}
        onClickShowResult={this.showResult.bind(this)}
        onClickResetState={this.resetState}
        state={this.state}
      ></Modal>
    );
  }
}
