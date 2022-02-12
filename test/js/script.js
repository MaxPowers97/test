
let elements = document.querySelectorAll('.main__base-pics-img') || []; //все картинки для слайдера
elements = [].slice.apply(elements); //перевод в массив
elements.forEach(function (element, i) {
  //функция, запускаемая по клику на любое изображение
  element.addEventListener('click', function () {
    let basePics = document.getElementsByClassName("main__base-pics"); //контейнер с картинками
    let basePicsClone = basePics[0].cloneNode(true); //клон этого контейнера
    //создание модального окна
    let modal = document.createElement('div');
    modal.setAttribute("class", "modal");
    modal.style.display = "block";
    let wrap = document.getElementsByClassName("wrapper");
    wrap[0].appendChild(modal);
    //создание слайдера, присвоение классов и размещение его в модальном окне
    let swiperMain = document.createElement('div');
    swiperMain.setAttribute("class", "swiper");
    modal.appendChild(swiperMain);
    swiperMain.appendChild(basePicsClone);
    basePicsClone.setAttribute("class", "swiper-wrapper");
    //размещение клона набора изображенией в слайдере
    let swiperPics = basePicsClone.getElementsByTagName('div');
    for (let i = 0; i < swiperPics.length; i++) {
      swiperPics[i].setAttribute("class", "swiper-slide");
    }
    //кнопки навигации для слайдера
    let swiperButtonPrev = document.createElement('div');
    swiperButtonPrev.setAttribute("class", "swiper-button-prev");
    swiperMain.appendChild(swiperButtonPrev);
    let swiperButtonNext = document.createElement('div');
    swiperButtonNext.setAttribute("class", "swiper-button-next");
    swiperMain.appendChild(swiperButtonNext);
    //нумерация слайдов
    let swiperPageNum = document.createElement('div');
    swiperPageNum.setAttribute("class", "swiper-pagination");
    swiperMain.appendChild(swiperPageNum);
    //кнопка, закрывающая модальное окно
    let closeButton = document.createElement('div');
    closeButton.setAttribute("class", "close-button");
    closeButton.innerHTML = "&times;";
    swiperMain.appendChild(closeButton);
    //функция, срабатывающая при закрытии слайдера
    closeButton.addEventListener("click", function () {
      modal.style.display = "none"; //скрытие модального окна
      document.body.classList.remove("class", "lock"); //разблокировка прокрутки страницы
    })
    //настройки слайдера
    const swiper = new Swiper(".swiper", {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      initialSlide: i,
    });
    //блокирование прокрутки экрана при открытом модальном окне
    document.body.setAttribute("class", "lock");
  }
  )
})
