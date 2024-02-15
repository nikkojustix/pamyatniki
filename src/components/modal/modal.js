// инициализация
export function bindModal(triggers, modal, close) {
  triggers = document.querySelectorAll(triggers);
  modal = document.querySelector(modal);
  close = modal.querySelector(close);

  const body = document.body;
  triggers.forEach((trigger) => {
    if (trigger != null) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        body.classList.add('locked');
      });
    }
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('locked');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
    }
  });
}

// вызов
flsFunctions.bindModal('trigger-selector', 'modal-selector', 'close-selecor');
