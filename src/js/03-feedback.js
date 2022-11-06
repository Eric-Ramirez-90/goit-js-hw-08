// Add imports above this line
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

isNotSubmittedLastMessage();

function onFormInput() {
  const fieldValues = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(fieldValues));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const isData = localStorage.getItem('feedback-form-state');
  if (isData) {
    const dataLocalStorage = localStorage.getItem('feedback-form-state');
    console.log(JSON.parse(dataLocalStorage));

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

    return;
  }
  alert('Your fields empty!!!');
}

function isNotSubmittedLastMessage() {
  if (localStorage.getItem('feedback-form-state')) {
    const parseValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    const { email, message } = parseValue;
    refs.input.value = `${email}`;
    refs.textarea.value = `${message}`;
  }
}
