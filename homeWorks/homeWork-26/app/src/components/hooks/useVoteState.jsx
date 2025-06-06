import { useEffect } from 'react';
import { useState } from 'react';

const defaultState = JSON.parse(localStorage.getItem('voting')) || {
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

export default function useVoteState() {
  const [currentState, setCurrentState] = useState(defaultState);

  useEffect(() => {
    localStorage.setItem('voting', JSON.stringify(currentState));
  });

  function vote(emojiKey) {
    setCurrentState((prev) => ({
      ...prev,
      [emojiKey]: (prev[emojiKey] || 0) + 1,
    }));
  }

  function resetState() {
    localStorage.removeItem('voting');
    location.reload();
  }

  function result() {
    // win first find in list
    const [winnerKey, winnerValue] = Object.entries(currentState).reduce(
      (previousValue, currentValue) =>
        currentValue[1] > previousValue[1] ? currentValue : previousValue
    );

    if (winnerKey === 'angry') {
      const className = 'bi bi-emoji-angry-fill icon-winner';
      setCurrentState((prevState) => ({
        ...prevState,
        isVisible: !prevState.isVisible,
        result: {
          key: winnerKey,
          votes: winnerValue,
          className: className,
        },
      }));
    } else if (winnerKey === 'smile') {
      const className = 'bi bi-emoji-smile-fill icon-winner';
      setCurrentState((prevState) => ({
        ...prevState,
        isVisible: !currentState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'upside') {
      const className = 'bi bi-emoji-smile-upside-down-fill icon-winner';
      setCurrentState((prevState) => ({
        ...prevState,
        isVisible: !currentState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'sunglasses') {
      const className = 'bi bi-emoji-sunglasses-fill icon-winner';
      setCurrentState((prevState) => ({
        ...prevState,
        isVisible: !currentState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    } else if (winnerKey === 'laughing') {
      const className = 'bi bi-emoji-laughing-fill icon-winner';
      setCurrentState((prevState) => ({
        ...prevState,
        isVisible: !currentState.isVisible,
        result: { key: winnerKey, votes: winnerValue, className: className },
      }));
    }
  }

  return {
    currentState,
    vote,
    resetState,
    result,
  };
}
