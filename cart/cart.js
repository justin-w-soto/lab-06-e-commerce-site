import { findById, getTotal, toUSD } from '../utils.js';
import visors from '../data/visors.js';
import { renderTableRow } from './render-table-row.js';
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');
function renderCart(){
    const cart = getCart();
    console.log(cart);
    for (let item of cart) {
        const visor = findById(visors, item.id);
        console.log(item);
        const tr = renderTableRow(visor, item);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = getTotal(visors, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    clearCart(); 
    location.reload();
});
