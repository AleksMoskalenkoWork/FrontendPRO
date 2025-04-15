const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.add('active');
    alert(`Current button is: ${event.target.innerText}`);
  }
});
