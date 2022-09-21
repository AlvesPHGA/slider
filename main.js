import SliderScroll from './scripts/slider-scroll.js';
import SliderInfinite from './scripts/slider-infinite.js';
import SliderNavigator from './scripts/slider-show.js';
// import ImageFetch_01 from './scripts/fetch_collection.js';

// // Slider Scroll
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
const slider_show = new SliderNavigator(
   '[data-slider=show]',
   '.__content',
   '.__slider-wrapp',
);
slider_show.init();

slider_show.addArrow(
   '.__arrows-or-buttons .__previous',
   '.__arrows-or-buttons .__next',
);

slider_show.addCounters();

// function Fetch() {
//    fetch('https://digimon-api.vercel.app/api/digimon')
//       .then((res) => res.json())
//       .then((data) => {
//          console.log(data);
//       });
// }

// Fetch();
