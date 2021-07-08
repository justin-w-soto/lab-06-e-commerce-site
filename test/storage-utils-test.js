import { CART, getCart, addItemtoCart, clearCart } from '../storage-utils.js';
const test = QUnit.test;

test('getCart return the shopping cart from localStorage as object', (expect) => {
    const myFakeCart = [
        { id: 'visor1', qty: 2 },
        { id: 'visor6', qty: 3 },
    ];
    const fakeCartString = JSON.stringify(myFakeCart);
    localStorage.setItem(CART, fakeCartString);

    const cart = getCart();

    expect.deepEqual(cart, myFakeCart);
});

test('getCart should return an empty array if the cart is empty', expect => {
    localStorage.removeItem(CART);
    
    const cart = getCart();
    const expected = [];

    expect.deepEqual(cart, expected);
});

test('addItemtoCart should update quantity if item already in cart', expect => {
    const myFakeCart = [
        { id: 'visor1', qty: 2 },
        { id: 'visor6', qty: 3 },
    ];
    const fakeCartString = JSON.stringify(myFakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemtoCart('visor1');
    
    const newCart = getCart();

    const expected = [
        { id: 'visor1', qty: 3 },
        { id: 'visor6', qty: 3 },
    ];

    expect.deepEqual(newCart, expected);

});

test('addItem to cart should add an item if its not already there', expect => {
    const myFakeCart = [
        { id: 'visor1', qty: 2 },
        { id: 'visor6', qty: 3 },
    ];
    const fakeCartString = JSON.stringify(myFakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemtoCart('visor2');
    
    const newCart = getCart();

    const expected = [
        { id: 'visor1', qty: 2 },
        { id: 'visor6', qty: 3 },
        { id: 'visor2', qty: 1 },
    ];

    expect.deepEqual(newCart, expected);

});

test('clearCart should delete the cart from localStorage', (expect)=>{
    const myFakeCart = [
        { id: 'visor1', qty: 2 },
        { id: 'visor6', qty: 3 },
    ];
    const fakeCartString = JSON.stringify(myFakeCart);
    localStorage.setItem(CART, fakeCartString);

    clearCart();

    const expected = [];
    const cart = getCart();
    expect.deepEqual(cart, expected);

});