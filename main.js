import ImagesFetch from './scripts/imagesFetch.js';
import SliderScroll from './scripts/slider-scroll.js';

const imagesFetch = new ImagesFetch(
   '.__slider-items',
   'https://digimon-api.vercel.app/api/digimon',
   'In Training',
);
imagesFetch.init();

const slider_scroll = new SliderScroll(
   '[data-slider=scroll]',
   '.__slider-items',
);
slider_scroll.init();
