
"use strict"

let reviewsSlider = new Swiper('.reviews-slider',{
    // Кнопки пагінації 
    pagination: {
        el: ".swiper-pagination",
        // булети 
        // перехід на слайд по кліку на пагінацію
        clickable: true,
        // динамічні булети
        dynamicBullets: true,
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
    // управління клавіатурою 
    keyboard: {
    // ввімкнути/вимкнути 
    enabled: true,
    // ввімкнути тільки тоді коли слайдер видно
    onlyInViewport: true,
    // ввімкнути керування за допомогою page up/down
    pageUpDown: true,
    },
    // відступи між слайдами
    spaceBetween: 50,
    // Автопрокрутка 
    autoplay: {
        // затримка перед прокруткою
        delay: 5000,
        // зупинка на останьому слайді
        stopOnLastSlide: true,
    },
    // швидкість перемикання слайдів
    speed: 1000,

})