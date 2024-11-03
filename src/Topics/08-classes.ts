export class Person {
//    public name: string;
//    private address: string;

    constructor( 
        public firstName: string,
        public LastName: string, 
        private address: string
    ) {} 
}


// export class  Hero extends Person {

//     constructor(
//         public alterego: string,
//         public age: number,
//         public realName: string  
//     ) {
//         super( realName, 'New york');
        

//     }

// }

export class  Hero {

    public person: Person;

    constructor(
        public alterego: string,
        public age: number,
        public person: Person,
    ) {
    // this.person = new person(realName);
        

    }

}




const person = new person('Adam Sandler', ' Adam Sandler', New york');

const ironman = new Hero( 'Adam Sandler', 176, 'AntMan');

console.log(ironman);
