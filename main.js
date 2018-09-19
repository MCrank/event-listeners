console.log('Ahoy hoy!');

const toDoInputEl = document.querySelector('#toDoInput');
const toDoDetailsEl = document.querySelector('#toDoDetails');
const submitToDoBtnEl = document.querySelector('#submitToDoBtn');

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML += stringToPrint;
};

const activateDeletes = () => {
  const deleteButtons = document.getElementsByClassName('deleteButton');

  for (let i = 0; i < deleteButtons.length; i++) {
    const element = deleteButtons[i];
    element.addEventListener('click', (event) => {
      // Card that the button was on
      const buttonClicked = event.target;
      const cardToDelete = buttonClicked.parentNode.parentNode;
      // .parentNode
      // .remove()
      cardToDelete.remove();
      console.log('The Clicked a delete button');
    });
  }
};

const buildNewToDoCard = (toDo, Notes) => {
  let newString = `<div class="card col-sm-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${toDo}</h5>
    <p class="card-text">${Notes}</p>
    <a href="#" class="card-link deleteButton">Delete ME!</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
  printToDom(newString, 'toDoCards');
  activateDeletes();
};

submitToDoBtnEl.addEventListener('click', (event) => {
  event.preventDefault();
  buildNewToDoCard(toDoInputEl.value, toDoDetailsEl.value);
});
