import { findById } from './utils.js';

export const CART = 'CARTY-MCFLY';

export function getCart(){
   
    let stringCart = localStorage.getItem(CART) || '[]';
   
    const cart = JSON.parse(stringCart); 
    return cart;
}

export function addItemtoCart(itemId){
    const cart = getCart();
    const item = findById(cart, itemId);
   
    if (item) {
        item.qty += 1; 
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }
    
    localStorage.setItem(CART, JSON.stringify(cart));

}

export function clearCart(){
    localStorage.removeItem(CART);
}