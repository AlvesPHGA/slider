export default class SliderShow {
   constructor(slider, slider_content) {
      this.slider = document.querySelector(slider);
      // this.slider_content = document.querySelector(slider_content);

      this.position = {
         final: 0,
         start: 0,
         movement: 0,
         new_pos: 0,
      };
   }

   getImagesInAPI() {
      const cards = this.slider.querySelector('.__slider-items');

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
               name_digimon.forEach((b) => {
                  if (a.name === b.name)
                     cards.innerHTML += this.template(a.name, a.img, a.level);
               });
            });
         });
   }

   template(name, img, level) {
      return `
      <div class = '__card'>
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
      </div>
      `;
   }

   clientEvent() {
      this.slider.addEventListener('mousedown', this.startSlider);
      this.slider.addEventListener('touchstart', this.startSlider);

      this.slider.addEventListener('mouseup', this.endMoveSlider);
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

      this.slider.addEventListener(type_ev, this.onMoveSlider);
   }

   onMoveSlider(ev) {
      const client_pos = ev.type === 'mousemove' ? ev.clientX : '';

      const move_cli = this.updatedPosition(client_pos);

      this.moveSlider(move_cli);
   }

   endMoveSlider(ev) {
      const type_action = ev.type === 'mouseup' ? 'mousemove' : 'touchmove';
      this.slider.removeEventListener(type_action, this.onMoveSlider);

      this.position.final = this.position.new_pos;
   }

   updatedPosition(clientX) {
      this.position.movement = (this.position.start - clientX) * 1.1;

      return this.position.final - this.position.movement;
   }

   moveSlider(trans) {
      this.position.new_pos = trans;
      const slider_content = this.slider.querySelector('.__slider-items');

      slider_content.style.transform = `translateX(${trans}px)`;
   }

   eventBind() {
      this.startSlider = this.startSlider.bind(this);
      this.onMoveSlider = this.onMoveSlider.bind(this);
      this.endMoveSlider = this.endMoveSlider.bind(this);
   }

   init() {
      this.eventBind();
      this.getImagesInAPI();
      this.clientEvent();
      return this;
   }
}
