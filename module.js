// exporting
console.log('export module'); 

const shoppingCart=10;
const cart= [];

export const addToCart=(product, quantity)=>{
    cart.push({product, quantity});
    console.log(`${quantity} ${product}`);
}

const totalPrice= 278;
const totalQuantity= 24;

export {totalPrice, totalQuantity as tq, shoppingCart}