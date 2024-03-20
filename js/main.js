import { initMobileMenu } from "./module/nav.js";
import { initReviewsSlider } from "./module/sliders.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initCounterAnimation } from "./module/counterAnimations.js";
import { initPopup } from './module/popup.js'
import { initMainSlider } from "./module/sliders.js";
import { initFilterSlider } from "./module/sliders.js";
import { initPopularSlider } from "./module/sliders.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initMobileMenu();
    initScrollToTop();
    initScroll();
    initCounterAnimation();
    initPopup();
    initReviewsSlider();
    initMainSlider();
    initFilterSlider();
    initPopularSlider();
    baguetteBox.run('.gallery-wrapper');

    

});
