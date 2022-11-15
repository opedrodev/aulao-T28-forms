// Variaveis Globais.
const getCheckBox = document.querySelector('#termos-check');
const getBtn = document.getElementById('btnClick');
const getName = document.querySelector('#nome');
const getLastName = document.querySelector('#sobrenome');
const getEmail = document.querySelector('#email');

// Funcoes
const handleClick = () => {
  // if(getBtn.disabled) getBtn.disabled = false;
  // else getBtn.disabled = true;

  getBtn.disabled ? getBtn.disabled = false : getBtn.disabled = true;
}

const getInputValues = () => {
  const getNameText = getName.value;
  const getLNameText = getLastName.value;
  const getEmailText = getEmail.value;

  if(getNameText.trim(' ') === '') return alert('Voce nao digitou o nome.');
  if(getLNameText.trim(' ') === '') return alert('Voce nao digitou o sobrenome.');
  if(getEmailText.trim(' ') === '') return alert('Voce nao digitou o email.');
}

// Chamadas das funcionalidades.
window.onload = () => {
  getCheckBox.addEventListener('click', handleClick);
  getBtn.addEventListener('click', getInputValues);
}
