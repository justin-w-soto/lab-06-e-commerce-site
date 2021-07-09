import { findById, getTotal, toUSD } from '../utils.js';
import visors from '../data/visors.js';
import { renderTableRow } from './render-table-row.js';
import { getCart, clearCart } from '../storage-utils.js';

// RENDER CART FUNCTION
const tableBody = document.getElementById('table-body');
function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const visor = findById(visors, item.id);
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

//ORDER BUTTON
let orderBtn = document.getElementById('place-order');
const cart = getCart();
if (cart.length === 0){
    orderBtn.disable = true;
} else {
    orderBtn.addEventListener('click', ()=> {
        alert('Are you sure you would like to purchase these stupid hats? You may regret this decision later...');
        clearCart(); 
        location.href = '../';
    });
}

// CLEAR CART BUTTON
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    clearCart(); 
    location.reload();
   
});    



