// script.js — чистий JS
document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openPriceBtn');
  const modal = document.getElementById('priceModal');
  const closeBtn = document.getElementById('modalClose');
  const overlay = modal.querySelector('.modal__overlay');
  const form = document.getElementById('priceForm');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('formStatus');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    // фокус на першому полі
    emailInput.focus();
    // блокувати скрол сторінки
    document.body.style.overflow = 'hidden';
    // зберігати попередній фокус не зроблено тут (можна додати)
    document.addEventListener('keydown', onKeyDown);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    formStatus.textContent = '';
    clearErrors();
    document.removeEventListener('keydown', onKeyDown);
    // повернути фокус на кнопку відкриття
    openBtn.focus();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closeModal();
    // простий trap: якщо Tab вкінці — повернути на початок (не повний trap)
  }

  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', function () {
    closeModal();
  });

  overlay.addEventListener('click', function () {
    closeModal();
  });

  // Валідація: має бути email або телефон
  function clearErrors() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';
  }

  function validate() {
    clearErrors();
    let valid = true;

    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (!email && !phone) {
      document.getElementById('emailError').textContent = 'Вкажіть email або телефон.';
      document.getElementById('phoneError').textContent = 'Вкажіть email або телефон.';
      valid = false;
    } else {
      if (email) {
        // простий regex для email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          document.getElementById('emailError').textContent = 'Невірний формат email.';
          valid = false;
        }
      }
      if (phone) {
        // простий телефонний формат: цифри та +()- і пробіли
        const phoneRegex = /^[\d+\-\s()]{7,20}$/;
        if (!phoneRegex.test(phone)) {
          document.getElementById('phoneError').textContent = 'Невірний формат телефону.';
          valid = false;
        }
      }
    }

    if (!message) {
      document.getElementById('messageError').textContent = 'Напишіть короткий опис запиту.';
      valid = false;
    } else if (message.length < 5) {
      document.getElementById('messageError').textContent = 'Повідомлення дуже коротке.';
      valid = false;
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    // Імітуємо відправку — тут вставте свій AJAX/fetch виклик
    formStatus.style.color = 'black';
    formStatus.textContent = 'Відправляємо...';

    // Приклад: імітація fetch з timeout (тут реального запиту нема)
    setTimeout(function () {
      formStatus.style.color = 'green';
      formStatus.textContent = 'Дякуємо! Ваш запит відправлено.';
      // скидаємо форму і закриваємо модал після короткої паузи
      form.reset();
      setTimeout(closeModal, 900);
    }, 800);
  });

  // Додатково — закрити форму клавішею Enter всередині textarea не буде відправляти форму:
  messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      form.requestSubmit();
    }
  });
});
