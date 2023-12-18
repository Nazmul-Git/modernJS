// // import
// import {
//   addToCart,
//   shoppingCart,
//   totalPrice as tp,
//   tq,
//   cart,
// } from "./module.js";
// import addCart from "./module.js";
// console.log("import module");
// addToCart("phone", 2);

// console.log(tp, tq, shoppingCart);

// addCart("mouse", 1);
// addCart("keyboard", 3);
// addCart("laptop", 5);
// console.log(cart);




////////////////////////////

// console.log('await outside function behave as synchronous/block the next line code.')
// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("end fetching");


//////////////////////////////////////////

// Call a function you type is Async
// console.log("await inside function");
const postData = async () => {
  console.log("start fetching");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return {title:data.at(-1).title, text: data.at(-1).body};
};
// const lastPost= postData();
// console.log(lastPost); // Promise {<pending>}

// lastPost.then(last=>console.log(last)); //{title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

const lastPost2= await postData();
console.log(lastPost2); //{title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}







// console.log("end fetching");





///////////////////////////////////////////////
const shoppingCart=(() => {
    const cart = [];
    const shippingCost=10;
    const totalPrice = 278;
    const totalQuantity = 24;
  
    const addToCart = (product, quantity) => {
      cart.push({ product, quantity });
      console.log(`${quantity} ${product}`);
    };
  
    const orderStock = (product, quantity) => {
      cart.push({ product, quantity });
      console.log(`${quantity} ${product} ordered from supplier`);
    };
  
    return{
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
      orderStock,
      shippingCost,
    };
  
  })();
  
  shoppingCart.addToCart('apple', 20);
  shoppingCart.addToCart('orange', 30);
  console.log(shoppingCart);
  console.log(shoppingCart.shippingCost);