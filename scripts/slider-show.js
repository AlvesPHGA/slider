export default class SliderShow {
   constructor(slider, slider_content) {
      this.slider = document.querySelector(slider);
      // this.slider_content = document.querySelector(slider_content);
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
   }

   startSlider(ev) {
      console.log(ev.type);
   }

   eventBind() {
      this.startSlider = this.startSlider.bind(this);
   }

   init() {
      this.getImagesInAPI();
      this.clientEvent();
      return this;
   }
}
