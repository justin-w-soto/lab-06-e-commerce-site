// IMPORT MODULES under test here:

import { renderVisors } from '../render-visors.js';
import { findById, getTotal, renderTableRow } from '../utils.js';
import visors from '../data/visors.js';

const test = QUnit.test;

test('does the js insert new li into html in browser', (expect) => {
    const janetLi = '<li><h3>The Janet</h3><img src="./assets/visor1.png" alt="The Janet"><span>$10</span><p>A fanny-pack for your face!</p><button>Add to Cart</button></li>';
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

test('returns visors by id', expect => {
    const expected = {
        id: 'visor6',
        name: 'Pink Lemonade',
        image: 'visor6.png',
        description: 'Pink & bulletproof',
        category: 'tactical gear',
        price: 75.00
    };
    const actual = findById(visors, 'visor6');
    expect.deepEqual(actual, expected);
});

test('renderTableRow returns a <tr> element', expect => {
    const v1 = {
        id: 'visor1',
        name: 'The Janet',
        image: 'visor1.png',
        description: 'A fanny-pack for your face!',
        category: 'multifunctional',
        price: 10.00
    };
    const visorCart = {
        id: 'visor1',
        qty: 2
    };
    const expected = `<tr><td>The Janet</td><td>$10.00</td><td>2</td><td>$20.00</td></tr>`;
    const dom = renderTableRow(v1, visorCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('getTotal should return the total amount in the cart', expect=>{
    const cart = [
        { id: 'visor1', qty: 4 },
        { id: 'visor2', qty: 6 }
    ];
    const data = [{
        id: 'visor1',
        price: 2
    },
    {
        id: 'visor2', 
        price: 4
    }];

    const expected = 32;
    const actual = getTotal(data, cart);
    expect.equal(expected, actual);
});