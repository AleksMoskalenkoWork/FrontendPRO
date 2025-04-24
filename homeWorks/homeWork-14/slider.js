const imageCollection = [
  '../../img/Screenshot_1.png',
  '../../img/Screenshot_2.png',
  '../../img/Screenshot_3.png',
  '../../img/Screenshot_4.png',
  '../../img/Screenshot_5.png',
  '../../img/Screenshot_6.png',
  '../../img/Screenshot_1.png',
  '../../img/Screenshot_2.png',
  '../../img/Screenshot_3.png',
  '../../img/Screenshot_4.png',
  '../../img/Screenshot_5.png',
  '../../img/Screenshot_6.png',
];

function Slider(collection) {
  this.currentImageIndex = 0;
  this.collectionImage = collection;

  this.next = () => {
    const buttonNext = document.createElement('button');
    const arrowNext = document.createElement('span');
    const sliderContainer = document.querySelector('div.slider-container');

    buttonNext.classList.add('slider-button', 'button-position_next');
    arrowNext.classList.add('arrow', 'arrow_next');

    buttonNext.appendChild(arrowNext);
    sliderContainer.appendChild(buttonNext);

    buttonNext.addEventListener('click', () => {
      this.currentImageIndex++;
      this.updateState();
    });

    return { buttonNext, arrowNext };
  };

  this.previous = () => {
    const buttonPrevious = document.createElement('button');
    const arrowPrevious = document.createElement('span');
    const sliderContainer = document.querySelector('div.slider-container');

    buttonPrevious.classList.add('slider-button', 'button-position_previous');
    buttonPrevious.style.display = 'none';
    arrowPrevious.classList.add('arrow', 'arrow_previous');

    buttonPrevious.appendChild(arrowPrevious);
    sliderContainer.appendChild(buttonPrevious);

    buttonPrevious.addEventListener('click', () => {
      this.currentImageIndex--;
      this.updateState();
    });

    return { buttonPrevious, arrowPrevious };
  };
  this.dots = () => {
    let currentDots = [];

    const dotsContainer = document.createElement('div');
    const sliderContainer = document.querySelector('div.slider-container');
    dotsContainer.classList.add('dots-container');

    dotsContainer ? dotsContainer.remove() : '';

    if (this.currentImageIndex === 0) {
      currentDots = [0, 1, 2];
    } else if (this.currentImageIndex === this.collectionImage.length - 1) {
      currentDots = [
        this.collectionImage.length - 3,
        this.collectionImage.length - 2,
        this.collectionImage.length - 1,
      ];
    } else {
      currentDots = [
        this.currentImageIndex - 1,
        this.currentImageIndex,
        this.currentImageIndex + 1,
      ];
    }

    currentDots.forEach((index) => {
      if (this.collectionImage.length <= 3) {
        dotsContainer.style.display = 'none';
      } else {
        const dot = document.createElement('span');
        dot.classList.add('dot');

        index === this.currentImageIndex ? dot.classList.add('dot_active') : '';

        dot.addEventListener('click', () => {
          this.currentImageIndex = index;
          this.updateState();
        });

        dotsContainer.appendChild(dot);
      }
    });

    sliderContainer.appendChild(dotsContainer);

    return dotsContainer;
  };

  this.sliderContainer = () => {
    const div = document.createElement('div');
    const image = document.createElement('img');

    div.classList.add('slider-container');
    div.appendChild(image);
    document.body.append(div);

    image.setAttribute(
      'src',
      `${this.collectionImage[this.currentImageIndex]}`
    );

    return { div, image };
  };

  this.updateState = () => {
    const getImageTag = document.querySelector('img');
    const buttonPrev = document.querySelector('.button-position_previous');
    const buttonNext = document.querySelector('.button-position_next');

    getImageTag.setAttribute(
      'src',
      this.collectionImage[this.currentImageIndex]
    );

    if (buttonPrev) {
      buttonPrev.style.display =
        this.currentImageIndex === 0 ? 'none' : 'block';
    }

    if (buttonNext) {
      buttonNext.style.display =
        this.currentImageIndex === this.collectionImage.length - 1
          ? 'none'
          : 'block';
    }

    this.dots();
  };

  this.sliderContainer();
  this.next();
  this.previous();
  this.dots();
}

new Slider(imageCollection);
