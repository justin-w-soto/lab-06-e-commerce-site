export function findById(items, id){
    //loop through the items
    //if the item id is equal to the id parameter 
    //return the item
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(visorItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
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

export function getTotal(visors, cart) {
    let orderTotal = 0;
    for (let item of cart) {
        const visor = findById(visors, item.id);
        orderTotal += visor.price * item.qty;
    } return orderTotal;
}
