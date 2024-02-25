export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support == true ? 'webp' : 'no-webp';
    document.querySelector('html').classList.add(className);
  });
}

export function toggleMobileMenu(e) {
  e.preventDefault();
  const menu = document.querySelector('.burger__menu');
  const btnInner = document.querySelector('.burger__btn-inner');
  const links = Array.from(document.querySelectorAll('.burger__menu-link'));
  const menuBtn = document.querySelector('.burger__menu-btn');

  menu.classList.toggle('burger__menu--active');
  btnInner.classList.toggle('burger__btn-inner--active');
  document.body.classList.toggle('locked');
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.remove('burger__menu--active');
      btnInner.classList.remove('burger__btn-inner--active');
      document.body.classList.remove('locked');
    }
    if (links.includes(e.target) || e.target === menuBtn) {
      menu.classList.remove('burger__menu--active');
      btnInner.classList.remove('burger__btn-inner--active');
      document.body.classList.remove('locked');
    }
  });
}

export function bindModal(triggers, modal, close) {
  triggers = document.querySelectorAll(triggers);
  modal = document.querySelector(modal);
  close = modal.querySelector(close);

  const body = document.body;
  triggers.forEach((trigger) => {
    if (trigger != null) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal.classList.contains('modal--order')) {
          modal.querySelector('.hidden-title').value = trigger.dataset.title;
        }
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
