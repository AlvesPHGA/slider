export class SliderShow {
   constructor(_slider, _content, _items) {
      this.slider = document.querySelector(_slider);
      this.content = document.querySelector(_content);
      this.items = document.querySelector(_items);

      this.position = {
         final: 0,
         start: 0,
         movement: 0,
         new_pos: 0,
      };

      this.changedEvent = new Event('changedEvent');
   }

   // cards
   getImagesInAPI() {
      const cards = this.slider.querySelectorAll('.__slider-items .__card');

      console.log(cards);

      fetch('https://digimon-api.vercel.app/api/digimon')
         .then((res) => res.json())
         .then((item) => {
            const items = item.map(({ name, img, level }) => {
               return { name, img, level };
            });

            const name_digimon = [
               { name: 'Greymon' },
               { name: 'Garurumon' },
               { name: 'Birdramon' },
               { name: 'Kabuterimon' },
               { name: 'Togemon' },
               { name: 'Ikkakumon' },
               { name: 'Angemon' },
            ];

            items.forEach((a, id) => {
               // name_digimon.forEach((b) => {
               //    if (a.name === b.name)
               cards.innerHTML = this.template(a.name, a.img, a.level);
               // });
            });
         });
   }

   template(name, img, level) {
      return `      
         <div class = '__image'>
            <img src ='${img}' alt = 'Image ${name}' title = '${name}'>
         </div>
         <div class = '__description'>
            <span class = '__legend'>${name}</span>
         </div>
         <div class = '__level'>
            <span>Level: </span>
            <span>${level}</span>
         </div>
      `;
   }

   // move slider
   clientEvent() {
      this.content.addEventListener('mousedown', this.startSlider);
      this.content.addEventListener('touchstart', this.startSlider);

      this.content.addEventListener('mouseup', this.endMoveSlider);
   }

   startSlider(ev) {
      let type_ev;

      if (ev.type === 'mousedown') {
         ev.preventDefault();
         this.position.start = ev.clientX;
         type_ev = 'mousemove';
      } else {
         type_ev = 'touchmove';
      }

      this.content.addEventListener(type_ev, this.onMoveSlider);
      // this.transitionItems(false);
   }

   onMoveSlider(ev) {
      const client_pos = ev.type === 'mousemove' ? ev.clientX : '';

      const move_cli = this.updatedPosition(client_pos);

      this.moveSlider(move_cli);
   }

   endMoveSlider(ev) {
      const type_action = ev.type === 'mouseup' ? 'mousemove' : 'touchmove';
      this.content.removeEventListener(type_action, this.onMoveSlider);

      this.position.final = this.position.new_pos;

      this.changedItemOffSliderMove();
      // this.transitionItems(true);
   }

   updatedPosition(clientX) {
      this.position.movement = (this.position.start - clientX) * 1.1;

      return this.position.final - this.position.movement;
   }

   moveSlider(trans) {
      this.position.new_pos = trans;

      this.items.style.transform = `translateX(${trans}px)`;
   }

   changedItemOffSliderMove() {
      if (this.position.movement > 120 && this.index_item.next !== undefined) {
         this.activeNextItem();
      } else if (
         this.position.movement < 120 &&
         this.index_item.prev !== undefined
      ) {
         this.activePrevItem();
      } else {
         this.changedItem(this.index_item.active);
      }
   }

   // position item
   wrappItem() {
      this.elements_array = [...this.items.children].map((item) => {
         const item_position = this.itemPosition(item);
         return {
            item_position,
            item,
         };
      });
   }

   itemPosition(item) {
      const field_margin = (this.content.offsetWidth - item.offsetWidth) / 2;

      return -(item.offsetLeft - field_margin);
   }

   changedItem(index) {
      const active_item = this.elements_array[index];

      this.moveSlider(active_item.item_position);
      this.itemIndex(index);

      this.position.final = active_item.item_position;

      this.activeItem();

      this.items.dispatchEvent(this.changedEvent);
   }

   itemIndex(index) {
      const last_item = this.elements_array.length - 1;

      this.index_item = {
         prev: index ? index - 1 : undefined,
         active: index,
         next: index === last_item ? undefined : index + 1,
      };
   }

   // active item
   activePrevItem() {
      if (this.index_item.prev !== undefined)
         this.changedItem(this.index_item.prev);
   }

   activeNextItem() {
      if (this.index_item.next !== undefined)
         this.changedItem(this.index_item.next);
   }

   // utils
   activeItem() {
      this.elements_array.forEach((i) => {
         i.item.classList.remove('__active-item');
      });
      this.elements_array[this.index_item.active].item.classList.add(
         '__active-item',
      );
   }

   transitionItems(active) {
      this.items.style.transition = active ? 'transform .5s' : '';
   }

   eventBind() {
      this.startSlider = this.startSlider.bind(this);
      this.onMoveSlider = this.onMoveSlider.bind(this);
      this.endMoveSlider = this.endMoveSlider.bind(this);

      this.activePrevItem = this.activePrevItem.bind(this);
      this.activeNextItem = this.activeNextItem.bind(this);
   }

   init() {
      this.eventBind();
      // this.getImagesInAPI();

      // this.transitionItems(true);
      this.clientEvent();

      this.wrappItem();
      this.changedItem(3);

      return this;
   }
}

export default class SliderNavigator extends SliderShow {
   constructor(_slider, _content, _items) {
      super(_slider, _content, _items);
      this.bindCounters();
   }

   addArrow(_prev, _next) {
      this._prev = document.querySelector(_prev);
      this._next = document.querySelector(_next);

      this.arrowEventClick();
   }

   arrowEventClick() {
      this._prev.addEventListener('click', this.activePrevItem);
      this._next.addEventListener('click', this.activeNextItem);
   }

   createCounters() {
      const counters = document.querySelector('.__counters');

      this.elements_array.forEach((item, index) => {
         counters.innerHTML += `<span class = "__counter"><a href = '#item${
            index + 1
         }'></a></span>`;
      });

      return counters;
   }

   addCounters() {
      this.counter = this.createCounters();

      this.counters_array = [...this.counter.children];

      this.activeCouter();
      this.counters_array.forEach(this.clickCounters);
   }

   activeCouter() {
      this.counters_array.forEach((c) => {
         c.classList.remove('__active-counter');
      });

      this.counters_array[this.index_item.active].classList.add(
         '__active-counter',
      );
   }

   clickCounters(item, index) {
      item.addEventListener('click', (ev) => {
         ev.preventDefault();
         this.changedItem(index);
      });

      this.items.addEventListener('changedEvent', this.activeCouter);
   }

   bindCounters() {
      this.clickCounters = this.clickCounters.bind(this);
      this.activeCouter = this.activeCouter.bind(this);
   }
}
