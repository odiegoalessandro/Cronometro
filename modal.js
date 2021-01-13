var openModal = document.querySelector('.configBtn')
var closeModal = document.querySelector('.closeModal')
var modal = document.querySelector('.modal')
var apply = document.querySelector('.apply')

openModal.addEventListener('click', () => {
    modal.classList.add('show')
})
closeModal.addEventListener('click', () => {
    modal.classList.remove('show')
})
apply.addEventListener('click', () => {
    modal.classList.remove('show')
})