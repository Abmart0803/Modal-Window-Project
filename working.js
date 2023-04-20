/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
// after refactoring the code.

// Before refactoring the codes.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => {
    console.log('Button Clicked.');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnCloseModal.addEventListener(
    'click',
    closeModal,
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
  );

  overlay.addEventListener(
    'click',
    closeModal,
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
  );
}
