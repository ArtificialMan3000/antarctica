'use strict';

// Модуль главного меню
window.menu = (function () {
  // Хедер
  var pageHeader = document.querySelector('.page-header');
  // Главное меню
  if (pageHeader) {
    var mainMenu = pageHeader.querySelector('.main-menu');
  }
  // Кнопка "бургер"
  if (pageHeader) {
    var burger = pageHeader.querySelector('.burger');
  }
  // Логотип в хедере
  if (pageHeader) {
    var logoLink = pageHeader.querySelector('.logo-link');
  }

  // Прячет меню
  var closeMainMenu = function () {
    if (burger) {
      burger.classList.remove('burger--close');
    }
    if (mainMenu) {
      mainMenu.classList.remove('main-menu--show');
    }
    if (logoLink) {
      logoLink.classList.remove('logo-link--blue');
    }
    if (pageHeader) {
      pageHeader.classList.remove('page-header--menu-open');
    }
  };

  // Открывает меню
  var openMainMenu = function () {
    if (burger) {
      burger.classList.add('burger--close');
    }
    if (mainMenu) {
      mainMenu.classList.add('main-menu--show');
    }
    if (logoLink) {
      logoLink.classList.add('logo-link--blue');
    }
    if (pageHeader) {
      pageHeader.classList.add('page-header--menu-open');
    }
  };

  // Обработчик клика на бургер
  var burgerClickHandler = function (evt) {
    evt.preventDefault();
    if (burger) {
      if (burger.classList.contains('burger--close')) {
        closeMainMenu();
      } else {
        openMainMenu();
      }
    }
  };

  // Инициализирует модуль
  var initMainMenu = function () {
    // Убираем хедер из потока
    if (pageHeader) {
      pageHeader.classList.add('page-header--absolute');
    }
    // Прячем меню
    closeMainMenu();
    // Вешаем на бургер обработчик для открытия меню
    if (burger) {
      burger.addEventListener('click', burgerClickHandler);
    }
  };

  return {
    initMainMenu: initMainMenu
  };
})();

'use strict';

// Главный модуль
window.main = (function () {
  // Инициализируем главное меню
  window.menu.initMainMenu();
})();
