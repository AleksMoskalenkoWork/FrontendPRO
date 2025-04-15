function askUserName() {
  const userName = prompt(`ім'я користувача`);

  if (userName !== null && userName !== '') {
    alert(`Hello, ${userName}! How are you?`);
  } else {
    alert(`Empty field name. Try again later.`);
  }
}

askUserName();
