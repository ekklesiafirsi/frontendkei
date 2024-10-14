let BMI = {
    firstName : "Bams",
    b : "78",
    t : "1.75",
    calculate : function () { 
        let BMI1 = this.b / (this.t*this.t);
        if (BMI < 16.0 ) {
            console.log ("Severly Underweight") ;
        }else if (BMI1 >= 16.00 && BMI1 < 18.4) {
            console.log ("Underweight") ;
        }else if (BMI1 >= 18.5 && BMI1 < 24.9) {
            console.log ("Normal") ;
        }else if (BMI1 >= 25.0 && BMI1 < 29.9) {
            console.log ("Overweight") ;
        }else if (BMI1 >= 30.0 && BMI1 < 34.9) {
            console.log ("Moderately Obese") ;
        }else if (BMI1 >= 35.0 && BMI1 < 39.9) {
            console.log ("Severely Obese") ;
        }else {
            console.log ("Morbidly Obese") ;
        }
    }
}
console.log (BMI);
console.log (BMI.calculate()); 