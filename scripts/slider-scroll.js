export default class SliderScroll {
   constructor(dt_slider) {
      this.dt_slider = document.querySelector(dt_slider);

      this.slider_content = this.dt_slider.querySelector('.__slider-items');

      this.btn_previous = this.dt_slider.querySelector('.__previous');
      this.btn_next = this.dt_slider.querySelector('.__next');

      this.btn_previous.classList.add('__desabled');
   }

   eventClick() {
      this.btn_previous.addEventListener('click', () => {
         this.btn_next.classList.remove('__desabled');
         this.leftMove();
      });
      this.btn_next.addEventListener('click', () => {
         this.btn_previous.classList.remove('__desabled');
         this.rightMove();
      });
   }

   leftMove() {
      const child_item = this.slider_content.firstElementChild;

      const res_calc =
         child_item.getBoundingClientRect().right -
         child_item.getBoundingClientRect().right * 0.95;

      this.slider_content.scrollLeft -= child_item.clientWidth;

      if (res_calc > 0) this.btn_previous.classList.add('__desabled');
   }

   rightMove() {
      const child_item = this.slider_content.lastElementChild;
      this.slider_content.scrollLeft += child_item.clientWidth;

      if (child_item.getBoundingClientRect().left < this.dt_slider.clientWidth)
         this.btn_next.classList.add('__desabled');
   }

   eventBind() {
      this.leftMove = this.leftMove.bind(this);
      this.rightMove = this.rightMove.bind(this);
   }

   init() {
      this.eventBind();
      this.eventClick();
      return this;
   }
}
