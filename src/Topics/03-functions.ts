
function addNumbers(a: number, b: Number):number{
    return a + b;
}


const addNumbersArrow = (a: number, b:number):string => {
    return `${a + b}`;
}


function multiply( firstNumber: number, secondNumber?: number, base: number = 5 ){
    return firstNumber * base;
}

// const result: number  = addNumbers(6, 7);
// const result2: string = addNumbersArrow(6, 7);
// const multiplyResult: number = multiply(6);
// console.log({ result, result2, multiplyResult});    








const healthCharacter  = ( character: Character,  amount: number) =>  {

    character.hp += amount;
}





const strider: Character  = {
    name: 'strider',
    hp: 67,
    showhp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}


healthCharacter( strider, 10);
healthCharacter( strider, 56);
healthCharacter( strider, 70);

strider.showhp();

export{};
