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
  // Кнопка закрытия меню
  if (pageHeader) {
    var menuClose = pageHeader.querySelector('.menu-close');
  }
  // Логотип в хедере
  if (pageHeader) {
    var logoLink = pageHeader.querySelector('.logo-link');
  }

  // Прячет меню
  var closeMainMenu = function () {
    if (burger) {
      burger.classList.remove('burger--hide');
    }
    if (menuClose) {
      menuClose.classList.add('menu-close--hide');
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
      burger.classList.add('burger--hide');
    }
    if (menuClose) {
      menuClose.classList.remove('menu-close--hide');
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
      burger.addEventListener('click', function (evt) {
        evt.preventDefault();
        openMainMenu();
      });
    }
    // Вешаем на крестик обработчик для закрытия меню
    if (menuClose) {
      menuClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        closeMainMenu();
      });
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
