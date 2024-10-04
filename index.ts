import products from "./products";

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Trostyanetska, 21, Kyiv";

const productName: string = "fanny pack";
const product = products.filter((product) => product.name === productName)[0];

if (product.preOrder) {
  console.log(`We'll send you a message when ${product.name} is on the way`);
}

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("The shipping is free for this product");
} else {
  shipping = 5;
}
