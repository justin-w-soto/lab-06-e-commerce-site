import { toUSD } from '../utils.js';


export function renderTableRow(visorItem, cartItem){
    const tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.textContent = visorItem.name;
    tr.appendChild(tdName);
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(visorItem.price);
    tr.appendChild(tdPrice);
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = visorItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;
}