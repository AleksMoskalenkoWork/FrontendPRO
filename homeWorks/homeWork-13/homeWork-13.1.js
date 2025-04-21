const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+380\d{9}$/;

const error = {
  name: `Обов'язкове текстове поле`,
  message: `Текстове поле не менше 5 символів`,
  phone: `Обов'язкове поле типу phone. З початком на +380`,
  email: `Обов'язково повинен мати @ та крапку`,
};

let form = document.querySelector('form');
let submitter = document.querySelector('#submitter');
let nameField = document.querySelector('input#name');
let messageField = document.querySelector('#message');
let phoneField = document.querySelector('#phone');
let emailField = document.querySelector('#email');

function addError(field, valueMessage) {
  const error = field.nextElementSibling;
  field.classList.add('errorField');
  error.classList.add('errorMessage');
  error.innerText = valueMessage;
}

function removeError(field) {
  const error = field.nextElementSibling;
  field.classList.remove('errorField');
  error.classList.remove('errorMessage');
  error.innerText = '';
}

function validateOnInputEvent(event, errorMsg) {
  if (event.target.value !== '') {
    removeError(event.target);
  } else addError(event.target, errorMsg);
}

function validateNameField(field, errorMsg) {
  const isValid = field.value === '';
  if (isValid) {
    addError(field, errorMsg);
  } else {
    removeError(field);
  }
  return isValid;
}

function validateMessageField(field, errorMsg) {
  const isValid = field.value.length > 5;
  if (!isValid) {
    addError(field, errorMsg);
  } else {
    removeError(field);
  }
  return isValid;
}

function validatePhoneField(field, errorMsg) {
  const isValid = phoneRegex.test(field.value);
  if (!isValid) {
    addError(field, errorMsg);
  } else {
    removeError(field);
  }
  return isValid;
}

function validateEmailField(field, errorMsg) {
  const isValid = emailRegex.test(field.value);
  if (!isValid) {
    addError(field, errorMsg);
  } else {
    removeError(field);
  }
  return isValid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formGroup = new FormData(form);
  let isValid = true;

  for (const field of formGroup.entries()) {
    const id = field[0].replace('user_', '');
    const getFieldById = document.getElementById(`${id}`);

    getFieldById.addEventListener('input', (event) => {
      if (id === 'name') {
        validateOnInputEvent(event, error.name);
      } else if (id === 'message') {
        validateOnInputEvent(event, error.message);
      } else if (id === 'phone') {
        validateOnInputEvent(event, error.phone);
      } else if (id === 'email') {
        validateOnInputEvent(event, error.email);
      }
    });

    if (id === 'name') {
      isValid = validateNameField(getFieldById, error.name);
    } else if (id === 'message') {
      isValid = validateMessageField(getFieldById, error.message);
    } else if (id === 'phone') {
      isValid = validatePhoneField(getFieldById, error.phone);
    } else if (id === 'email') {
      isValid = validateEmailField(getFieldById, error.email);
    }
  }

  if (isValid) {
    console.log('Форма валідна:');
    for (const field of formGroup.entries()) {
      console.log(`${field[0]}: ${field[1]}`);
    }
  }
});
