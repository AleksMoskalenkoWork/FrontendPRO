function showRandomImage() {
  const image = document.createElement('img');
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  image.setAttribute('src', `../../img/Screenshot_${randomNumber}.png`);
  document.querySelector('#right').appendChild(image);
}

showRandomImage();
