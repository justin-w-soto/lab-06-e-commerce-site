// IMPORT MODULES under test here:

import { renderVisors } from '../render-visors.js';
const test = QUnit.test;

test('does the js insert new li into html in browser', (expect) => {
    const janetLi = '<li><h3>The Janet</h3><img src="./assets/visor1.png" alt="The Janet"><span>$10</span><button>Add to Cart</button></li>';
    const v1 = {
        id: 'visor1',
        name: 'The Janet',
        image: 'visor1.png',
        description: 'A fanny-pack for your face!',
        category: 'multifunctional',
        price: 10.00
    };
    const actual = renderVisors(v1);
    expect.equal(actual.outerHTML, janetLi);
});
