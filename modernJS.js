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


// // Call a function you type is Async
// console.log("await inside function");
// const postData = async () => {
//   console.log("start fetching");
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// };
// postData();
// console.log("end fetching");


////////////////////////////

console.log('await outside function behave as synchronous')
console.log("start fetching");
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
console.log("end fetching");