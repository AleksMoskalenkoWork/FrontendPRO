class WeatherWidget {
  constructor() {
    this.city;
    this.response;
    this.json;
    this.date = new Date();
    this.apiKey = '6b5612588751a596d85ff5adbf583e3f';
    this.input = document.querySelector('#cityName');
    this.button = document.querySelector('#submit');
  }

  enterKeyEvent(event) {
    if (event.key === 'Enter') {
      this.fetchData();
    }
  }

  addError() {
    const error = this.input.nextElementSibling;
    this.input.classList.add('errorField');
    error.classList.add('errorMessage');
    error.innerText = 'City name is required!';
  }

  removeError() {
    const error = this.input.nextElementSibling;
    this.input.classList.remove('errorField');
    error.classList.remove('errorMessage');
    error.innerText = '';
  }

  validateInput() {
    if (
      this.input.value === '' ||
      this.input.value === null ||
      Number(this.input.value)
    ) {
      this.addError();
    } else {
      this.removeError();
    }
  }

  weatherState() {
    const weatherStateWrapper = document.querySelector('#weatherStateWrapper');
    const clear = document.createElement('i');
    const clouds = document.createElement('i');

    if (this.json.weather[0].main === 'Clear') {
      clear.classList.add('bi', 'bi-sun');
      weatherStateWrapper.appendChild(clear);
    } else if (this.json.weather[0].main === 'Clouds') {
      clouds.classList.add('bi', 'bi-cloud');
      weatherStateWrapper.appendChild(clouds);
    } else if (this.json.weather[0].main === 'Rain') {
      clouds.classList.add('bi', 'bi-cloud-rain');
      weatherStateWrapper.appendChild(clouds);
    }
  }

  handelFetchError() {
    this.input.value = '';
    const emptyState = document.querySelector('#emptyState');
    const leftContentContainer = document.querySelector(
      '#leftContentContainer'
    );
    const rightContentContainer = document.querySelector(
      '#rightContentContainer'
    );
    const widgetWrapper = document.querySelector('.widgetWrapper');
    const error = document.createElement('span');
    error.innerText = this.response.statusText;
    widgetWrapper.appendChild(error);

    if (emptyState) {
      emptyState.remove();
    } else if (leftContentContainer && rightContentContainer) {
      leftContentContainer.remove();
      rightContentContainer.remove();
    } else if (error) {
      error.remove();
    }
  }

  widgetTemplate(wrapper) {
    wrapper.innerHTML = `
        <div id="leftContentContainer">
            <div class='directionWrapper'>
                <span class='location'></i>${
                  this.json.name + ',' + this.json.sys.country
                }</span>
                <span>${this.date.toLocaleDateString()}</span>
            </div>
            <div class='weatherDescriptionWrapper'>
                <span class='temp'><i class="bi bi-thermometer-half"></i>${
                  Math.floor(this.json.main.temp) + ' ' + 'C'
                }</span>
                <span class='weatherDescription'>${
                  this.json.weather[0].description
                }</span>
            </div>
        </div>
        <div id="rightContentContainer">
        <div class='parameterWrapper'>
            <span>${
              'feels like:' + ' ' + Math.floor(this.json.main.feels_like)
            }</span>
            <span>${
              'humidity:' + ' ' + Math.floor(this.json.main.humidity)
            }</span>
            <span>${
              'pressure:' + ' ' + Math.floor(this.json.main.pressure)
            }</span>
            <span>${
              'max:' + ' ' + Math.floor(this.json.main.temp_max) + 'C'
            }</span>
            <span>${
              'min:' + ' ' + Math.floor(this.json.main.temp_min) + 'C'
            }</span>
        </div>
        <div id='weatherStateWrapper'></div>
        </div>
      `;
  }

  async fetchData() {
    this.city = this.input.value;
    if (this.city === '' || this.city === null || Number(this.city)) {
      this.validateInput();
    } else {
      this.response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
      );
      this.json = await this.response.json();

      this.renderData();
      this.weatherState();
    }
  }

  renderData() {
    if (this.response.status === 400) {
      this.handelFetchError();
    } else if (this.response.status === 401) {
      this.handelFetchError();
    } else if (this.response.status === 404) {
      this.handelFetchError();
    } else {
      this.input.value = '';
      const widgetWrapper = document.querySelector('.widgetWrapper');
      const emptyState = document.querySelector('#emptyState');
      if (emptyState) {
        emptyState.remove();
      }
      this.widgetTemplate(widgetWrapper);
    }
  }
}

const weatherWidget = new WeatherWidget();
