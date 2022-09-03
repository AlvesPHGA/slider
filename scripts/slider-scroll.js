export default class SliderScroll {
   constructor(dt_slider) {
      this.dt_slider = document.querySelector(dt_slider);

      this.slider_content = this.dt_slider.querySelector('.__slider-items');

      this.btn_previous = this.dt_slider.querySelector('.__previous');
      this.btn_next = this.dt_slider.querySelector('.__next');

      this.btn_previous.classList.add('__desabled');

      this.touch_position = {
         start: 0,
         final: 0,
         move: 0,
         new_position: 0,
      };
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

   eventTouch() {
      this.dt_slider.addEventListener('touchstart', (ev) => {
         this.touch_position.start =
            ev.changedTouches[0].clientX - this.slider_content.offsetLeft;
      });

      this.dt_slider.addEventListener('touchmove', (ev) => {
         const event_touch = ev.changedTouches[0].clientX;
         this.onMoveTouchSlider(event_touch);
      });

      this.dt_slider.addEventListener('touchend', (ev) => {
         this.offMoveTouchSlider(ev);
      });
   }

   onMoveTouchSlider(ev) {
      const touch_cli = this.updatedPosition(ev);
      this.moveSlider(touch_cli);
   }

   moveSlider(distX) {
      this.touch_position.new_position = distX;
      this.slider_content.style.transform = `translateX(${distX}px)`;
   }

   updatedPosition(touch_cli) {
      this.touch_position.move = (this.touch_position.start - touch_cli) * 1.1;

      return this.touch_position.final - this.touch_position.move;
   }

   offMoveTouchSlider() {
      this.touch_position.final = this.touch_position.new_position;
   }

   eventBind() {
      this.leftMove = this.leftMove.bind(this);
      this.rightMove = this.rightMove.bind(this);

      this.onMoveTouchSlider = this.onMoveTouchSlider.bind(this);
      this.offMoveTouchSlider = this.offMoveTouchSlider.bind(this);
   }

   init() {
      this.eventBind();
      this.eventClick();
      this.eventTouch();
      return this;
   }
}
