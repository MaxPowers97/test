// копирование и использование ссылки на изображение в модальном окне
$(".main__base-pics-img img").on('click', function () {
  let imgsrc = $(this).attr('src');
  $(this).attr("src", imgsrc);
  $(".modal__img img").attr("src", imgsrc);
});

// включение модального окна и работа порядкогового номера изображений
$(".main__base-pics-img").click(function (event) {
  $('body').addClass('lock');
  $('.modal').addClass('active');
  let num_active = $(this).index(".main__base-pics-img");
  $('.modal__img-num').text(num_active + 1);
});

// закрытие модального окна
$(".modal__img-close").click(function (event) {
  $('body').removeClass('lock');
  $('.modal').removeClass('active');
});