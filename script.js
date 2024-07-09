'use strict';

// Elements
const button = document.querySelector('.news-letter__button-subscribe');
const textInput = document.querySelector('.news-letter__text-input');
const invalidMessage = document.querySelector('.news-letter__invalid');
const emailId = document.querySelector('.emailid');
const success = document.querySelector('.news-letter__success');
const subscribe = document.querySelector('.news-letter');
const dismissBtn = document.querySelector('.news-letter__button-dismiss');

// Event Handlers
const showSuccessMessage = inputValue => {
  emailId.textContent = inputValue;
  success.classList.remove('hidden');
  subscribe.classList.add('hidden');
};

const showErrorMessage = () => {
  invalidMessage.classList.remove('hidden');
};

const onSubscribeBtnClick = () => {
  const inputValue = textInput.value;
  inputValue.includes('@') && inputValue.includes('.com')
    ? showSuccessMessage(inputValue)
    : showErrorMessage();
};

const onDismissBtnClick = () => {
  success.classList.add('hidden');
  subscribe.classList.remove('hidden');
  textInput.value = '';
  invalidMessage.classList.add('hidden');
};

// Event Listeners
button.addEventListener('click', onSubscribeBtnClick);
dismissBtn.addEventListener('click', onDismissBtnClick);
