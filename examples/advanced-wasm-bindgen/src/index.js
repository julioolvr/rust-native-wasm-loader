import { helloWorld } from './lib.rs'

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const outputElement = document.getElementById('output');

const update = () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  outputElement.textContent = module.helloWorld(firstName, lastName);
};

firstNameInput.addEventListener('input', update);
lastNameInput.addEventListener('input', update);
update();
