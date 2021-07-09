// import functions and grab DOM elements
import visors from './visors.js';
import { renderVisors } from './render-visors.js';
import { addItemtoCart } from './storage-utils.js';

const visorsUL = document.getElementById('visors');
for (let visor of visors) {
    const visorLI = renderVisors(visor);
    visorsUL.appendChild(visorLI);
}
const addButtons = document.querySelectorAll('.add');
for (let button of addButtons) {
    button.addEventListener('click', (e)=>{
        //console.log('did the click work?', e.target.value);
        addItemtoCart(Number(e.target.value));
    });
}