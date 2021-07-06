// import functions and grab DOM elements
import visors from './visors.js';
import { renderVisors } from './render-visors.js';
//console.log(visors);

const visorsUL = document.getElementById('visors');
for (let visor of visors) {
    const visorLI = renderVisors(visor);
    visorsUL.appendChild(visorLI);
}
