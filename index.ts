console.log('Hello from index');

/*
Typescript :
-
 */
// ECMAScript 2015 - ES6
/*
string, number, boolean,
undefined, null, any

Array

Classes natives : Dates, Math, ...


 */
let a = 'Bonjour le monde';
let b = 12;
let c = true;
let e;
console.log(e); // undefined
console.log(1 + '2'); // 12
// un + avec une string => concaténation
console.log(1 - +'2'); // +string => converti en number
console.log(1 - Number('2')); // idem
console.log(Number('deux')); // NaN => Not a Number
const params = 'deux';
const params_numb = Number(params); // NaN
if(isNaN(params_numb)) { // true si l'argument est NaN
    console.log('Ce paramétre n\'est pas un nombre !!!')
}

// camelCase  snake_case kebab-case PascalCase
// Les variables JS s'écrivent en camelCase ou snake_case
// Les classes s'écrivent en PascalCase

let f : string  = 'toto'; // string
let g: any = 'toto';
g = true;
g = 123;
g = undefined;
g = '10';

let h: number = g as number;
console.log(h - 1);

let fruits: string[] = [];
//fruits.push(1);
fruits.push('Pommes');


// Function
function sum(a: number, b: number): number {
    return a + b;
}

const substract = function (a: number, b: number) {
    return a - b;
}
substract(2, 3);
sum(1, 1);

const multiply = (a: number, b: number): number => a * b;
// retour implicite de a * b

const divide = (a: number, b: number) => {
    // plus de traitement
    return a * b;
}
multiply(2, 3);
divide(10, 2);

const boucle = (arr: any[], callback: Function) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

const fleurs = ['Tulipes', 'Begonias', 'Paquerettes'];
boucle(fleurs, function (el, i) {
    console.log(`Element : ${el} => index ${i}`);
});

boucle(fleurs, (el, i) => console.log(`Element : ${el} => index ${i}`));

const display = (el: any, i: number) => {
    console.log(`Element : ${el} => index ${i}`)
}
boucle(fleurs, display);


fleurs.forEach((fleur) => console.log(fleur));
fleurs.push('Marguerites');
const index = fleurs.indexOf('Begonias'); // -1 si n'existe pas
if(index !== -1) {
    fleurs.splice(index, 1);
}
const fleurs_maj = fleurs.map((f) => f.trim().toUpperCase());
console.log(fleurs_maj);

const fleurs_filtered = fleurs.filter((f) => f.charAt(0) === 'M');
console.log(fleurs_filtered);

const d = 'Toto';
//d = 'Nope';


// Condition :
/*
===
!==
> <
>= <=
 */
// En JS
//console.log(1 == '1'); // true
//console.log(1 === '1'); // false

/*
Truthy / Falsy : ce qu'une valeur renvoie quand elle convertie en boolean
Falsy => false, undefined, null, NaN, '', ``, "" ( empty string), 0

=> Boolean()
=> dans un if, while, ternaire
 */
let is_logged = true; // undefined

if(is_logged) {
    console.log('Vous êtes connecté⋅e');
}

if(!is_logged) {
    console.log('Veuillez vous connecter')
}

let user; // undefined

if(user) {
    console.log('Vous êtes connecté⋅e');
}

if(!user) {
    console.log('Veuillez vous connecter');
}
//          WTF : What ? true : false
const message = (user)? 'Connecté⋅e' : 'Anonyme';

// Types personnalisés, Interfaces
