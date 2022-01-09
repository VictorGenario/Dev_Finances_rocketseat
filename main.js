const overlay = document.querySelector('.modal-overlay')
const buttonNew = document.querySelector('.button-new')
const buttonCancel = document.querySelector('.button.cancel')

buttonNew.addEventListener('click', function () {
  overlay.classList.add('active')
})

buttonCancel.addEventListener('click', function () {
  overlay.classList.remove('active')
})
