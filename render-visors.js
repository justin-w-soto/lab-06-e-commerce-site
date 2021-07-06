export function renderVisors(visor){
    const visorLI = document.createElement('li');
    const visorh3 = document.createElement('h3');
    visorh3.textContent = visor.name;
    
    const visorImg = document.createElement('img');
    visorImg.src = `./assets/${visor.image}`;
    visorImg.alt = visor.name;
    
    const visorSpan = document.createElement('span');
    visorSpan.textContent = `$${visor.price}`;

    const visorD = document.createElement('p');
    visorD.textContent = `${visor.description}`;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    visorLI.appendChild(visorh3);
    visorLI.appendChild(visorImg);
    visorLI.appendChild(visorSpan);
    visorLI.appendChild(visorD);
    visorLI.appendChild(button);

    return visorLI;
}