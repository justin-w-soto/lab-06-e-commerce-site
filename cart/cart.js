import { findById, getTotal, renderTableRow, toUSD } from '../utils.js';
import visors from '../data/visors.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const visor = findById(visors, item.id);
    const tr = renderTableRow(visor, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = getTotal(visors, cart);
totalDom.textContent = toUSD(total);
