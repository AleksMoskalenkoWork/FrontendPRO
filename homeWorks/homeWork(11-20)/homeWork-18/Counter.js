class Counter {
  constructor() {
    this.timerBlock = document.querySelector('#timer');
    this.setintervalWrapper = document.querySelector('div.askIntervalWrapper');
    this.counterWrapper = document.querySelector('div.counterWrapper');

    this.intervalID = null;
    this.seconds;
  }

  askInterval() {
    const value = prompt('Set interval for counter in seconds');

    if (value === null || value === '' || isNaN(value)) {
      alert('Something went wrong. Please try again.');
    } else {
      this.seconds = value;

      this.setintervalWrapper.classList.add('hideElement');
      this.counterWrapper.classList.remove('hideElement');

      this.start();
    }
  }

  updateState() {
    if (this.seconds < 60) {
      const minutes = '00';
      const seconds = String(this.seconds).padStart(2, '0');

      this.timerBlock.textContent = `${minutes}:${seconds}`;
    } else if (this.seconds < 3600) {
      const minutesFormat = Math.floor(this.seconds / 60);
      const secondsFormat = this.seconds % 60;

      const hours = '00';
      const minutes = String(minutesFormat).padStart(2, '0');
      const seconds = String(secondsFormat).padStart(2, '0');

      this.timerBlock.textContent = `${hours}:${minutes}:${seconds}`;
    } else {
      const hoursFormat = Math.floor(this.seconds / 3600);
      const minutesFormat = Math.floor((this.seconds % 3600) / 60);
      const secondsFormat = this.seconds % 60;

      const hours = String(hoursFormat).padStart(2, '0');
      const minutes = String(minutesFormat).padStart(2, '0');
      const seconds = String(secondsFormat).padStart(2, '0');

      this.timerBlock.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }

  start() {
    this.updateState();

    this.intervalID = setInterval(() => {
      this.seconds--;
      this.updateState();
      if (this.seconds <= 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
    this.intervalID = null;

    this.counterWrapper.classList.add('hideElement');
    this.setintervalWrapper.classList.remove('hideElement');
  }
}

const counter = new Counter();
