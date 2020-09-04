'use strict';

// Модуль главного меню
window.menu = (function () {
  // Хедер
  var pageHeader = document.querySelector('.page-header');
  // Главное меню
  var mainMenu = pageHeader.querySelector('.main-menu');
  // Кнопка "бургер"
  var burger = pageHeader.querySelector('.burger');
  // Кнопка закрытия меню
  var menuClose = pageHeader.querySelector('.menu-close');
  // Логотип в хедере
  var logoLinkImg = pageHeader.querySelector('.logo-link__img');

  // Прячет меню
  var closeMainMenu = function () {
    burger.classList.remove('burger--hide');
    menuClose.classList.add('menu-close--hide');
    mainMenu.classList.remove('main-menu--show');
    logoLinkImg.classList.remove('logo-link__img--blue');
    pageHeader.classList.remove('page-header--menu-open');
  }

  // Переключает меню между открытым и закрытым состоянием
  var openMainMenu = function () {
    burger.classList.add('burger--hide');
    menuClose.classList.remove('menu-close--hide');
    mainMenu.classList.add('main-menu--show');
    logoLinkImg.classList.add('logo-link__img--blue');
    pageHeader.classList.add('page-header--menu-open');
  }

  // Инициализирует модуль
  var initMainMenu = function () {
    // Убираем хедер из потока
    pageHeader.classList.add('page-header--absolute');
    // Прячем меню
    closeMainMenu();
    // Вешаем на бургер обработчик для открытия и закрытия меню
    burger.addEventListener('click', function (evt) {
      evt.preventDefault();
      openMainMenu();
    });
    menuClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeMainMenu();
    });
  }

  return {
    initMainMenu: initMainMenu
  }
})();
