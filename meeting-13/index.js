// Rest Parameter & spread operator

//1. Rest Parameter 
//> Tanpa Rest Parameter 
const func1 = (param1,param2,param3) => {
    console.log(param1,param2,param3);
} ;

func1("A","B","C");

//> Dengan rest parameter 
const funct2 = (...params) => {
    console.log(params);
};

func2("A","B","C");

const func3 = (param1,param2,...params) => {
    console>log(param1,param2);
    console.log(params);
};

//2. Spread operator 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers); 

// 1. saat duplikasi array 
let numbers2 = [numbers]
console.log(numbers2);

// 2. menggabungkan array 
let array1= [1, 2, 3];
let array2= [4, 5, 6];
let array3= [7, 8, 9];

let numbers3 = array1.concat(array2,array3); // ES5
let numbers4 = [...array1,...array3]; // ES6

// Object 
// 1. Diplikasi object 
const john = {
    fullName: "john Doe",
    age : 30,
}; 
const john2 = { ...john,address: "manado"};

//2. menggabungkan object 
let ob1 = {a: 1, b: 2};
let ob2 = {c: 3, d: 4};

letcombinedObj = { ...ob1, ...ob2 };
console.log(combinedObj);
