export function FetchToSliderScroll(url_api, level_cli) {
   const url = url_api;
   // let level_cli = level_cli;
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

   function match({ name, img, level }) {
      const list_training = [
         'Koromon',
         'Tsunomon',
         'Yokomon',
         'Motimon',
         'Tanemon',
         'Bukamon',
         'Tokomon',
      ];

      list_training.forEach((i) => {
         if (name === i) section.innerHTML += template(name, img, level);
      });
   }

   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         data.map((data) => {
            if (level_cli === 'In Training') {
               match(data);
            }
         });
      });
}
