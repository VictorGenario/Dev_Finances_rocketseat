const nT = document.querySelector('.button-new')
const modal = document.querySelector('.modal-overlay')
const buttonCancel = document.querySelector('.button .cancel')
function opModal() {
  nT.addEventListener('click', function () {
    modal.classList.add('active')
  })
}
function clModal() {
  buttonCancel.addEventListener('click', function () {
    modal.classList.remove('active')
  })
}
