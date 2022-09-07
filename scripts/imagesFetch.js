export default class ImagesFetch {
   constructor(contents, url_site, digimon_lvl) {
      this.contents = document.querySelector(contents);

      this.url = url_site;
      this.digimon_lvl = digimon_lvl;
   }

   getImagesInAPI() {
      fetch(this.url)
         .then((res) => res.json())
         .then((item) => {
            for (let i = 0; i <= 20; i++) {
               this.info = {
                  name: item[i].name,
                  image: item[i].img,
                  level: item[i].level,
               };

               if (this.info.level === this.digimon_lvl)
                  this.contents.innerHTML += this.template();
            }
         });
   }

   template() {
      return `
      <div class = '__card'>
         <div class = '__image'>
            <img src = '${this.info.image}' alt = 'Image ${this.info.name}' title = '${this.info.name}'>
         </div>
         <div class = '__description'>
            <span class = '__legend'>${this.info.name}</span>
         </div>
      </div>
      `;
   }

   startImages() {
      this.getImagesInAPI();
   }

   init() {
      this.startImages();
      return this;
   }
}
