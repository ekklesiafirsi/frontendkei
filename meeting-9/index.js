// // javascript loop 
// // array object 
// let students = [
//     {
//         id : 1, 
//         firstName : "jane",
//         grade : 80,
//     },
//     {
//         id : 2, 
//         firstName : "babe",
//         grade : 75,
//     },
//     {
//         id : 3, 
//         firstName : "lia",
//         grade : 90,
//     },
// ];
// console.log(students);

// // 1. for loop 
// for (let i= 0; i < students.length i++) {
//     console.log(students[i]);
}

// 2.while - loop 
let i : 0;
while ( i < students.lenght) {
    console.log(students[i].firstName);
    i++;
}

// 3. do - while - loop 
let i = 0;
do {
    console.log(students[i].firstName);
    i++;
}

//4. array built in method 
// 4.a. foreach() tidak ada return value
students.forEach(function(iten)) {
    console.log (item.firstName);
}

// 4.a. map
students.map(function(item)) {
    console.log (item.firstName);
}

// 4.c.filter 
