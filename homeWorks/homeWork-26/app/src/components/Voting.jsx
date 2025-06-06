import React from 'react';
import Modal from './Modal';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem('voting')) || {
      angry: 0,
      smile: 0,
      upside: 0,
      sunglasses: 0,
      laughing: 0,
      isVisible: false,
      result: {
        key: null,
        value: null,
        className: null,
      },
    };
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('voting', JSON.stringify(this.state));
    }
  }

  resetState() {
    localStorage.removeItem('voting');
    location.reload();
  }

  vote(emojiKey) {
    this.setState((prevState) => {
      const newVote = (prevState[emojiKey] || 0) + 1;
      return {
        [emojiKey]: newVote,
      };
    });
  }

  result() {
    // win first find in list
    const [winnerKey, winnerValue] = Object.entries(this.state).reduce(
      (previousValue, currentValue) =>
        currentValue[1] > previousValue[1] ? currentValue : previousValue
    );

    if (winnerKey === 'angry') {
      const className = 'bi bi-emoji-angry-fill icon-winner';
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'smile') {
      const className = 'bi bi-emoji-smile-fill icon-winner';
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'upside') {
      const className = 'bi bi-emoji-smile-upside-down-fill icon-winner';
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'sunglasses') {
      const className = 'bi bi-emoji-sunglasses-fill icon-winner';
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'laughing') {
      const className = 'bi bi-emoji-laughing-fill icon-winner';
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    }
  }

  render() {
    return (
      <Modal
        onClickEmoji={this.vote.bind(this)}
        onClickShowResult={this.result.bind(this)}
        onClickResetState={this.resetState}
        state={this.state}
      ></Modal>
    );
  }
}
