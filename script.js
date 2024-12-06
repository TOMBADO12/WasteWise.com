/*===== swiper =====*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*===== Select all video elements =====*/
const videos = document.querySelectorAll('video');

/*===== Add event listener to each video =====*/
videos.forEach((video) => {
    video.addEventListener('play', () => {
      
      /*===== Pause other videos when one starts playing =====*/
        videos.forEach((v) => {
            if (v !== video) {
                v.pause();
            }
        });
    });
});
