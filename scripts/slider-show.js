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

            for (const i of items) {
               if (i.level === 'Champion')
                  cards.innerHTML += this.template(i.name, i.img, i.level);
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

   init() {
      this.getImagesInAPI();
      return this;
   }
}
