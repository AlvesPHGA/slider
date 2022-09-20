import ImagesFetch from './scripts/imagesFetch.js';
import SliderScroll from './scripts/slider-scroll.js';
import SliderInfinite from './scripts/slider-infinite.js';
import SliderShow from './scripts/slider-show.js';

// // Slider Scroll
const imagesFetchToSliderScroll = new ImagesFetch(
   '.__slider-items',
   'https://digimon-api.vercel.app/api/digimon',
   'In Training',
);
imagesFetchToSliderScroll.init();

const slider_scroll = new SliderScroll(
   '[data-slider=scroll]',
   '.__slider-items',
);
slider_scroll.init();

// // Slider Infinite
const slider_infinite = new SliderInfinite(
   '[data-slider=infinite]',
   '.__slider-contents .__items',
);
slider_infinite.init();

// Slider
const slider_show = new SliderShow(
   '[data-slider=show]',
   '.__content',
   '.__slider-wrapp',
);
slider_show.init();

// slider_show.addArrow('.__prev03', '.__next03');
