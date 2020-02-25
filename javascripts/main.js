import store from './components/store.js';


const init = () => {
 store.makeStore();
};

init();






// const book = {
//     name: '50 Shades of Chicken'
// };

// const printToDom = (divID, textToPrint) => {
//     const selectedDiv = document.getElementById(divID);
//     selectedDiv.innerHTML = textToPrint;
// };

// const addToCartEvent = () => {
//     let domString = ''
//     domString += 'THIS IS THE CART'
//     printToDom('cart-container', domString)
// };
// const makeStore = () => {
//     let domString = '';
//     domString += `<h2>${book.name}</h2>`;
//     domString += '<button id="cart-button" class="btn btn-dark">Add to Cart</button>';
//     printToDom('store-container', domString);
//     document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent)

// };

// makeStore();