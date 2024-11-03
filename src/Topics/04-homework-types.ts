/*
    ===== Código de TypeScript =====
*/



interface Address {
    Street: string;
    Country: string;
    city: string;
}

interface SuperHero {   
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        Street: 'Main St',
        Country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.Country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};