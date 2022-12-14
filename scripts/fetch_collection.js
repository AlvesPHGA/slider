export function FetchToSliderScroll(url_api, level_cli) {
   const url = url_api;

   function template01(element, name, img, level) {
      const field = element;
      const div = document.createElement('div');

      div.setAttribute('class', '__card');

      div.innerHTML = `
         <div class = '__image'>
            <img src = '${img}' alt = 'Image ${name}' title = '${name}'>
         </div>
         <div class = '__description'>
            <span class = '__legend'>${name}</span>
         </div>
         <div class = '__level'>
            <span>Level: </span>
            <span>${level}</span>
         </div>
      `;

      field.appendChild(div);
   }

   function matchTraining({ name, img, level }) {
      const section = document.querySelector('.__slider-items');

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
         if (name === i) template01(section, name, img, level);
      });
   }

   function matchRookie({ name, img, level }) {
      const html_dom = document.querySelectorAll('.__item');

      const list_rookie = [
         'Agumon',
         'Gabumon',
         'Biyomon',
         'Tentomon',
         'Palmon',
         'Gomamon',
         'Patamon',
      ];

      for (let i = 0; i < list_rookie.length; i++) {
         if (name === list_rookie[i] && i < 3) {
            template01(html_dom[0], name, img, level);
         } else if (name === list_rookie[i] && i >= 3 && i < 6) {
            template01(html_dom[1], name, img, level);
         } else if (name === list_rookie[i] && i > 5) {
            template01(html_dom[2], name, img, level);
         }
      }
   }

   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         data.map((data) => {
            if (level_cli === 'In Training') {
               matchTraining(data);
            } else if (level_cli === 'Rookie') {
               matchRookie(data);
            }
         });
      });
}
