const swiperGallery = new Swiper(".mySwiperGallery", {
        effect: "coverflow",
        loop: true,
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".swiper-pagination",
        dinamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },
});