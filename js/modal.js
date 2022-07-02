'use strict';

window.addEventListener('DOMContentLoaded', () => {


  const modal = document.querySelector('[data-modal]');
  const modalSuccess = document.querySelector('[data-modal-success]');
  const btnOpenModal = document.querySelector('[data-btn-modal]');
  const btnCloseModal = document.querySelectorAll('[data-modal-close]');

  function open(someModal) {
    someModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(timerForModal);
  }

  function close(someModal) {
    someModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    close(modal);
    close(modalSuccess);
  }

  btnOpenModal.addEventListener('click', () => {
    open(modal);
  });

  function closeModal(someModal) {
    btnCloseModal.forEach(item => {
      item.addEventListener('click', () => {
        closeAllModals();
      });
    });

    someModal.addEventListener('click', e => {
      if (e.target === someModal) {
        closeAllModals();
      }
    });

    window.addEventListener('keydown', e => {
      if (e.keyCode === 27 && someModal.style.display === 'block') {
        closeAllModals();
      }
    });
  }

  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    close(modal);
    open(modalSuccess);
  });

  closeModal(modal);
  closeModal(modalSuccess);

  const timerForModal = setTimeout(function () {
    open(modal);
  }, 10000);

});