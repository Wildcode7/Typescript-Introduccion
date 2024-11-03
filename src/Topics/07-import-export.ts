import { Product } from './06-function-destructuring';

import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
{
    description: 'Nokia',
    price: 176
},
{
    description: 'Ipad',
    price: 156 
}
];



//  Tax = 15.0
const [ total, tax ] = taxCalculation({
    tax: 0.7,
    products: shoppingCart
});

console.log( 'Total', total);
console.log( 'Tax', tax);