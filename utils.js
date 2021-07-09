export function findById(items, id){
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function getTotal(visors, cart) {
    let orderTotal = 0;
    for (let item of cart) {
        const visor = findById(visors, item.id);
        orderTotal += visor.price * item.qty;
    } return orderTotal;
}

