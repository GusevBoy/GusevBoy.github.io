var tableButton = document.querySelector('.table__button');
var tablePopup = document.querySelector('.table__popup');
var tableRowLast = document.querySelector('.table__row_last');

function onClickTableButton() {
  console.log(tablePopup);
  if (tablePopup.classList.contains('table__popup_close')) {
    tablePopup.classList.remove('table__popup_close');
    tablePopup.classList.add('table__popup_open');
    tableRowLast.setAttribute('style', 'border-top:1px solid #b7b7b7');
    tableButton.textContent = 'Свернуть';
  } else {
    tablePopup.classList.remove('table__popup_open');
    tablePopup.classList.add('table__popup_close');
    tableRowLast.setAttribute('style', '');
    tableButton.textContent = 'Развернуть';
    }
}

tableButton.addEventListener('click', onClickTableButton);
