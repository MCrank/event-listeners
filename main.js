console.log('Ahoy hoy!');

const toDoInputEl = document.querySelector('#toDoInput');
const toDoDetailsEl = document.querySelector('#toDoDetails');
const submitToDoBtnEl = document.querySelector('#submitToDoBtn');

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML += stringToPrint;
};

const buildNewToDoCard = (toDo, Notes) => {
  let newString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${toDo}</h5>
    <p class="card-text">${Notes}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
  printToDom(newString, 'toDoCards');
};

submitToDoBtnEl.addEventListener('click', (event) => {
  event.preventDefault();
  buildNewToDoCard(toDoInputEl.value, toDoDetailsEl.value);
});
