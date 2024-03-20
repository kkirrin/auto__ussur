export const initMainSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.main-item');
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                // loop: true,

                speed: 1200,
                // effect: "fade",
                autoHeight: true,

                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                  clickable: true,
                  el: `swiper-pagination`,
               }
    
            });
        }
    };

    itemSlider();
}


export const initReviewsSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.review-item');
        let swiper;
        // console.log('Подключился')
        if (item) {
            
            swiper = new Swiper(item, {
                loop: true,
                // autoplay: {
                //     delay: 3000
                // },
                speed: 1000,
                direction: 'horizontal',
                spaceBetween: 5,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".review-next",
                    prevEl: ".review-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    695: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween:10
                    }
                    }
            });
        }
    };

    itemSlider();
}

export const initFilterSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.filter-item');
        let swiper;
        // console.log('Подключился')
        if (item) {
            
            swiper = new Swiper(item, {
                loop: true,
                // autoplay: {
                //     delay: 3000
                // },
                speed: 1500,
                direction: 'horizontal',
                spaceBetween: 5,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".review-next",
                    prevEl: ".review-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    695: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween:20
                    }
                    }
            });
        }
    };

    itemSlider();
}


export const initPopularSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.popular-item');
        let swiper;
        // console.log('Подключился')
        if (item) {
            
            swiper = new Swiper(item, {
                loop: true,
                // autoplay: {
                //     delay: 3000
                // },
                speed: 1500,
                direction: 'horizontal',
                spaceBetween: 5,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".review-next",
                    prevEl: ".review-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    695: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween:20
                    }
                    }
            });
        }
    };

    itemSlider();
}
