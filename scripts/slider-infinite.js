export default class SliderInfinite {
   constructor(dt_slider, slider_contents) {
      this.dt_slider = document.querySelector(dt_slider);
      this.slider_contents = document.querySelector(slider_contents);

      this.previous = this.dt_slider.querySelector('.__btn-prev');
      this.next = this.dt_slider.querySelector('.__btn-next');

      const last_element = this.slider_contents.lastElementChild;

      this.slider_contents.insertAdjacentElement('afterbegin', last_element);
   }

   getImageInAPI() {
      const html_dom = this.slider_contents.querySelectorAll('.__item');

      fetch('https://digimon-api.vercel.app/api/digimon')
         .then((res) => res.json())
         .then((item) => {
            for (let a = 7; a < 10; a++) {
               const { name, img, level } = item[a];

               if (level === 'Rookie')
                  html_dom[1].innerHTML += this.template(name, img, level);
            }

            for (let b = 10; b < 13; b++) {
               const { name, img, level } = item[b];

               if (level === 'Rookie')
                  html_dom[0].innerHTML += this.template(name, img, level);
            }

            for (let c = 13; c < 16; c++) {
               const { name, img, level } = item[c];

               if (level === 'Rookie')
                  html_dom[2].innerHTML += this.template(name, img, level);
            }
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

   prevItem() {
      let last = this.slider_contents.lastElementChild;

      this.slider_contents.style.marginLeft = '0';
      this.slider_contents.style.transition = 'margin-left .7s ease';

      setTimeout(() => {
         this.slider_contents.style.transition = 'none';
         this.slider_contents.insertAdjacentElement('afterbegin', last);
         this.slider_contents.style.marginLeft = '-100%';
      }, 900);
   }

   nextItem() {
      let first = this.slider_contents.firstElementChild;

      this.slider_contents.style.marginLeft = '-200%';
      this.slider_contents.style.transition = 'margin-left .7s ease';

      setTimeout(() => {
         this.slider_contents.style.transition = 'none';
         this.slider_contents.insertAdjacentElement('beforeend', first);
         this.slider_contents.style.marginLeft = '-100%';
      }, 900);
   }

   clickArrows() {
      this.previous.addEventListener('click', this.prevItem);
      this.next.addEventListener('click', this.nextItem);
   }

   eventBind() {
      this.prevItem = this.prevItem.bind(this);
      this.nextItem = this.nextItem.bind(this);
   }

   init() {
      this.eventBind();
      this.getImageInAPI();
      this.clickArrows();
      return this;
   }
}
