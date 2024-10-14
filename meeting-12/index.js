//String Literals, Arrow Function & Default Parameter

//String Literals
// let fullName = "John Doe";
// let age = 30;
// let address = "Manado";
// let kalimat =
//   "Halo nama saya " +
//   fullName +
//   ", Umur saya" +
//   age +
//   " tahun dan saya tinggal di " +
//   address;

// console.log(kalimat);

// let kalimat2 = Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address};
// console.log(kalimat2);

//Arrow function

// function sayGreetings(fullName) {
//   return Hello my name is ${fullName};
// }

// console.log(sayGreetings("Riana Keni"));

// const sayGreetings2 = (fullName) => {
//   return Hello my name is ${fullName};
// };

// console.log(sayGreetings2("Riana Keni"));

// //Arrow function pada IIFE
// let output = (() => "Hello")();
// console.log(output);

// //Arrow function callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default parameter
const sayGreetings3 = (fullName, age, address) => {
    if (fullName === undefined) {
      fullName = "John Doe";
    }
    if (age === undefined) {
      age = 30;
    }
    if (address === undefined) {
      address = "Mapanget";
    }
    console.log(
      Hallo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}
    );
  };
  
  sayGreetings3("Riana Keni", 20, "Airmadidi");
  
  const sayGreetings4 = (
    fullName = "John Doe",
    age = 30,
    address = "Mapanget"
  ) => {
    console.log(
      Hallo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}
    );
  };
  
  sayGreetings4("Riana Keni", 20, "Airmadidi");