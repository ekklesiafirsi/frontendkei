// mini exercise 
//  ubahlah dengan menggunaan rest parameter 
const penjumlahan = (a, b, c, d, e) => {
    let arr = [a, b, c, d, e];
    let hasil = 0;
    arr.forEach ((item) => (hasil+= item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5)); 

// jawab 

const penjumlahan = (...arr) => {
    let hasil = 0;
    arr.forEach ((item) => (hasil+= item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7)); 

// 2. spread operator 