/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

const tabContent = document.querySelectorAll('.shop__map');
const tabs = document.querySelectorAll('.shop__city');
const tabParent = document.querySelector('.shop__menu');

function hidetabcontent() {
    tabContent.forEach(item => {
        item.style.display = "none";
    })
    tabs.forEach(item => {
        item.classList.remove('active');
    })
}
hidetabcontent();
function showtabcontent(i=0) {
   tabs[i].classList.add('active');
   tabContent[i].style.display = 'block';
}
showtabcontent();

tabParent.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('shop__city')){
     tabs.forEach((item,i)=>{
        if(event.target == item){
            hidetabcontent();
            showtabcontent(i);
        }
     })
    }
})

const modalButton = document.querySelector('.header__profile'),
    modalClose = document.querySelector('.modal__close'),
    modal = document.querySelector('.modal');

    modalButton.addEventListener('click',()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
    }) 
    modalClose.addEventListener('click',()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
    }) 
    modal.addEventListener('click',(event)=>{
        if(event.target === modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    })
    document.addEventListener('keydown',(event)=>{
        if(event.code ==='Escape'){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    })