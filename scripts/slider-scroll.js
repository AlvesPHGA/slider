export default class SliderScroll {
   constructor(dt_slider) {
      this.dt_slider = document.querySelector(dt_slider);

      this.slider_content = this.dt_slider.querySelector('.__slider-items');
      this.buttons = this.dt_slider.querySelectorAll('button');
   }

   previousMove() {
      const child_item = this.slider_content.firstElementChild.clientWidth;
      this.slider_content.scrollLeft -= child_item;
   }

   nextMove() {
      const child_item = this.slider_content.firstElementChild.clientWidth;
      this.slider_content.scrollLeft += child_item;
   }

   eventClick() {
      this.buttons.forEach((el) => {
         el.addEventListener('click', (t) => {
            t.target.parentElement.classList.contains('__previous')
               ? this.previousMove()
               : this.nextMove();
         });
      });
   }

   init() {
      this.eventClick();
      return this;
   }
}
