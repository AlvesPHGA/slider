import ImagesFetch from './scripts/imagesFetch.js';

const imagesFetch = new ImagesFetch('.__slider-items');
imagesFetch.init();
// console.log(imagesFetch);

// const example = document.querySelector('.example');
// const url = `https://digimon-api.vercel.app/api/digimon`;

// fetch(url)
//    .then((res) => res.json())
//    .then((item) => {
//       for (let i = 0; i <= 100; i++) {
//          const info = {
//             name: item[i].name,
//             image: item[i].img,
//             level: item[i].level,
//          };

//          if (info.level === 'Champion')
//             example.innerHTML += `
//             <div class = '__card'>
//                <div class = '__image'>
//                   <img src = '${info.image}' alt = 'Image ${info.name}' title = '${info.name}'>
//                </div>
//                <div class = '__description'>
//                   <span class = '__legend'>${info.name}</span>
//                </div>
//             </div>
//             `;
//       }
//    });
