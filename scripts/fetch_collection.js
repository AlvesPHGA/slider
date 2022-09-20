export function ImageFetch_01(url_api) {
   const url = url_api;
   const section = document.querySelector('.__slider-items');

   function template(name, img, level) {
      return `
      <div class = '__card'>
         <div class = '__image'>
            <img src = '${img}' alt = 'Image ${name}' title = '${name}'>
         </div>
         <div class = '__description'>
            <span class = '__legend'>${name}</span>
         </div>
      </div>
      `;
   }

   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         const list_training = [
            'Koromon',
            'Tsunomon',
            'Yokomon',
            'Motimon',
            'Tanemon',
            'Bukamon',
            'Tokomon',
         ];

         data.map(({ name, img, level }) => {
            list_training.forEach((i) => {
               if (name === i) section.innerHTML += template(name, img, level);
            });
         });
      });
}
