// Current version
let steps = 0;
let currentPosition = null;

let ladderCurrent = {
  up: function () {
    // підніматиме вас на одну сходинку
    steps++;
    currentPosition = steps;
    // return currentPosition;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    steps--;
    currentPosition = steps;
    // return currentPosition;
  },
  showStep: function () {
    // показує поточну сходинку
    alert(`Current version. Current step is: ${currentPosition}`);
  },
};

ladderCurrent.up();
ladderCurrent.up();

ladderCurrent.down();

ladderCurrent.showStep(); // 1

// Mode Version

function Ladder() {
  this.steps = null;
  this.currentPosition = null;
  this.up = () => {
    // підніматиме вас на одну сходинку
    this.steps++;
    this.currentPosition = this.steps;
    return this;
  };
  this.down = () => {
    // опускатиме вас на одну сходинку
    this.steps--;
    this.currentPosition = this.steps;
    return this;
  };
  this.showStep = function () {
    // показує поточну сходинку
    alert(`Mode version. Current step is: ${this.currentPosition}`);
  };
}

const ladderMode = new Ladder();

ladderMode.up().up().down().showStep(); // 1
