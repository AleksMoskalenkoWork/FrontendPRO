class WeatherWidget {
  constructor() {
    this.city;
    this.response;
    this.json;
    this.date = new Date();
    this.apiKey = '';
    this.input = document.querySelector('#cityName');
    this.button = document.querySelector('#submit');
    this.widgetWrapper = document.querySelector('.widgetWrapper');
    this.state = document.createElement('i');
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

  async weatherState() {
    const weatherStateWrapper = document.querySelector('#weatherStateWrapper');

    if (this.json.weather[0].main === 'Clear') {
      this.state.classList.add('bi', 'bi-sun');
      weatherStateWrapper.appendChild(this.state);
    } else if (this.json.weather[0].main === 'Clouds') {
      this.state.classList.add('bi', 'bi-cloud');
      weatherStateWrapper.appendChild(this.state);
    } else if (this.json.weather[0].main === 'Rain') {
      this.state.classList.add('bi', 'bi-cloud-rain');
      weatherStateWrapper.appendChild(this.state);
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
                <span class='location'>${
                  this.json.name + ',' + this.json.sys.country
                }</span>
                <span>${this.date.toLocaleDateString()}</span>
            </div>
            <div class='weatherDescriptionWrapper'>
                <span class='temp'><i class="bi bi-thermometer-half"></i>${
                  Math.floor(this.json.main.temp) + ' ' + '°C'
                }</span>
                <span class='weatherDescription'>${
                  this.json.weather[0].description
                }</span>
            </div>
        </div>
        <div id="rightContentContainer">
        <div class='parameterWrapper'>
            <i class="bi bi-arrow-repeat" id='updateWeather' onclick="weatherWidget.updateData()"></i>
            <span>${
              'feels like:' + ' ' + Math.floor(this.json.main.feels_like) + '°C'
            }</span>
            <span>${
              'humidity:' + ' ' + Math.floor(this.json.main.humidity) + '%'
            }</span>
            <span>${
              'pressure:' + ' ' + Math.floor(this.json.main.pressure) + 'hPa'
            }</span>
            <span>${
              'max:' + ' ' + Math.floor(this.json.main.temp_max) + '°C'
            }</span>
            <span>${
              'min:' + ' ' + Math.floor(this.json.main.temp_min) + '°C'
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
    }
  }

  async updateData() {
    if (this.json !== null) {
      this.response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.json.name}&units=metric&appid=${this.apiKey}`
      );
      this.json = await this.response.json();
      this.renderData();
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
      if (this.emptyState) {
        this.emptyState.remove();
      }
      this.widgetTemplate(this.widgetWrapper);
      this.weatherState();
    }
  }
}

const weatherWidget = new WeatherWidget();
