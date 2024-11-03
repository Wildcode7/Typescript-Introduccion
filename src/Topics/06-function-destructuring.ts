// interface Product {
//     description: string;
//     price: number;
// }

// const phone: Product = {
//     description: ' Nokia A673 ',
//     price: 176.0
// }

// const tablet: Product = {
//     description: ' Ipad Air 7 ',
//     price: 370.0 
// }


// interface TaxCalculationOptions {
//     tax: number,
//     products: Product[];
// }


// function taxCalculation( options:TaxCalculationOptions ): number[]
// {
//     let total = 0;

//     options.products.forEach( product => {

//             total += product.price;
//     })






//     return[ total, total * options.tax ];

// }


// const shoppingCart = [phone, tablet];
// const tax = 0.7;

// const result = taxCalculation({

//     products: shoppingCart,
//     tax: tax,

// })


// console.log( 'Total', result[0])
// console.log( 'Tax', result[1])





// export{};






// Solucion del tutor:


export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: ' Nokia A673 ',
    price: 176.0
}

const tablet: Product = {
    description: ' Ipad Air 7 ',
    price: 370.0 
}


interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}


// function taxCalculation( options:TaxCalculationOptions ): number[]
// function taxCalculation( { tax, products }:TaxCalculationOptions ): number[]
// {
export function taxCalculation( options:TaxCalculationOptions ): number[]
{
const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {

            total += price;
    });






    return[ total, total * tax ]; 

}


const shoppingCart = [phone, tablet];
const tax = 0.7;

const [ total, taxTotal] = taxCalculation({

    products: shoppingCart,
    tax: tax,

})


// console.log( 'Total' );
// console.log( 'Tax', taxTotal);








// Solucion de Chat gtp:
// interface Product {
//     description: string;
//     price: number;
// }

// const phone: Product = {
//     description: 'Nokia A673',
//     price: 176.0
// }

// const tablet: Product = {
//     description: 'Ipad Air 7',
//     price: 370.0 
// }

// interface TaxCalculationOptions {
//     tax: number;
//     products: Product[];
// }

// function taxCalculation({ tax, products }: TaxCalculationOptions): number[] {
//     let total = 0;

//     products.forEach(({ price }) => {
//         total += price;
//     });

//     return [total, total * tax];
// }

// const shoppingCart = [phone, tablet];
// const tax = 0.7;

// // Desestructuramos el resultado de taxCalculation
// const [total, totalWithTax] = taxCalculation({
//     products: shoppingCart,
//     tax,
// });

// console.log('Total', total);
// console.log('Tax', totalWithTax);

// export {};
