import ImagesFetch from './scripts/imagesFetch.js';
import SliderScroll from './scripts/slider-scroll.js';

const imagesFetch = new ImagesFetch('.__slider-items');
imagesFetch.init();

const slider_scroll = new SliderScroll('[data-slider=scroll]');
slider_scroll.init();
