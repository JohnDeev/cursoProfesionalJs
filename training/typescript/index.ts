//booleano 
let muted: boolean  = true;
muted = false;
// muted = 'callado'; no se puede hacer 

//Numners
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;



//string

let nombre: string = 'John';
let saludo: string = `Me llamo ${nombre}`;

//Array
let people: string[];
people = ['John', 'Rafa', 'Luis', 'Andrea', 'Lore'];

// people.push('9000');
//doble tipo array
let peopleAndNumber: Array<string | number > = [];
peopleAndNumber.push('Ricardo');
peopleAndNumber.push(9000);

//Enum
enum Color {
    rojo = 'rojo',

    verde = 'verde',

    azul = 'azuls',
};
 
let colorFavorito: Color = Color.verde;
console.log(`My favorit color is: ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

//objecy
let someObject: object = {
    type: 'Wildcard'

}

function add(a:number, b: number): number {
    return a + b;
}

const sum = add(4, 6)

function createAdder ( a: number ): (number) => number { 
    return function (b: number) {
        return b + a;
    }
}


const addFour = createAdder(4);
const fourPlus6 = addFour(6);


function fullname(firstName: string, lastName: string = 'Pertuz'):string {
    return `${firstName} ${lastName}`;
}

const john = fullname('John');
console.log(john);


//interfaces
interface rectangulo {
    ancho: number;
    alto: number;
    color: Color;

}

let rect: rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.azul,
};


function area(r: rectangulo): number {
    return r.ancho * r.ancho;
}


const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.Color}`  : `Un rectangulo simple`;
}

console.log(rect.toString);