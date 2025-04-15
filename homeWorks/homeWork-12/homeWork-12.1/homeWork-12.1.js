const showPromptButton = document.querySelector('#showPrompt');
const setNewUrlButton = document.querySelector('#setNewUrl');
let inputValue;

showPromptButton.addEventListener('click', () => {
  inputValue = prompt('Set new Url:');
});

setNewUrlButton.addEventListener('click', () => {
  location.href = inputValue;
});
