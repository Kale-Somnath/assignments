//syntax
//Declaration Variable=data;

//Declaration done on 4 basich points

//1. Initialization
//2. Reassignment
//3. Redeclaration
//4. Scope of data

//1. Initialization
//Initialization is all abount adding the values at the time of declaring, storing the data while creating the variable itself

var a;  //It is not mandatory to initialize the variable when we are declaring with var;
let b; //It is not mandatory to initialize the variable when we are declaring with let;
const pi=3.14; ////It is mandatory to initialize the variable when we are declaring with const;

//2.Reassignment
//Reassignment is all about modifying the original value during the execution process
a=100;  //Reassignment is possible when declared variable with 'var'.
b=200;  //Reassignment is possible when declared variable with 'let'.
//pi=3.15; //Reassignment is not possible when declared variable with 'const'.

//3. Redeclaration
//Declaring variable once again to store deffernet data
var a="Bharat";  //Redclaration is possible when variable declared with 'var';
// let b= "Maata";  //Redclaration is not possible when variable declared with 'let';
// const pi=500;  //Redclaration is not possible when variable declared with 'const';

console.log(a);
console.log(b);
console.log(pi);

//4. scope of data
//once we are stored the data, where we can access the data?

//When we declare the variable with either 'let' or 'const', it will act like block scope variable
//when we declare the variablw ith 'var', it will act like a non-block-scoped variable

{
    var x=100;
    let y=200;
    const x=300;

    // console.log(x);
    // console.log(y);
    // console.log(z);
}

console.log(x); //This will work because 'x' is not block scoped.
console.log(y); //This will not work because 'y' is blocked scoped.
console.log(z); //This will not work because 'z' is blocked scoped.

