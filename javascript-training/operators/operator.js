//Operator= operators are set of special charector used in javascript program to perform different type of operatiosn

//Types of operators
//1. Arithmatic operator
//2. Assignment operator
//3. Comparisum operator
//4. Logical operator
//5. Ternary operator

//1. Ariithmatic operator

// + ->Addition
// - ->Substraction
// * ->Multiplication
// / ->Division
// % ->Reminder of the devision
// ++ ->Increment
// -- ->Decrement

let a=10; 
let b=20;

//a++ ->Post increment = post execution of current line, increase the value
//++a ->Pre-increment = First increase the value, then execute the current line
console.log("1. Ariithmatic operator");
console.log(++a);
console.log(a);
console.log(--b);
console.log(b);

//2. Assignment operator= set of special charector used to assign a value to a variable
console.log("2. Assignment operator");

let i=10;
console.log(i);

i+=5;
console.log(i); //15

i-=10;
console.log(i); //5

i*=20;
console.log(i); //100

i/=5;
console.log(i)  //20

i%=2;
console.log(i);

//3. Comparisum operator = set of special charector used in a programming launguage to complare different values
console.log("3. Comparisum operator");

//==(Loose equality), can verify data only without verifying data type
//=== (strict equality), verify both data as well as datatype

let x=10;
let y=10;
let z='10';

console.log(x+y);
console.log(x+z);

console.log(x==y);
console.log(x==z);

console.log(x===y);
console.log(x===z);

console.log(x!=z);

console.log(x!==z);


//4. logical operator -> Set of special charecters used to build logic by combiing multiple conditions togather

// && ->Logical AND= It will return true if all condiitons are ture
// || ->Logical OR = It will return true at least one condition is true
// !  ->Logical NOT= It will return opposite result

let p=10;
let q=20;
let r=30;

console.log(p<q && q>r); 
console.log(p<q || q>r); 
console.log(!p<q && q<r);  

//5. Ternary operator =>Ternary operator is a special charactor used to perform conditional operaton. It is a shorthand of an if-else conditional 
//Systax: let result= (condition) ? value-if-true: value-if-else

    let age=27;

    let result=(age>=18)? "Eligible" : "Not Eligible";
    console.log(result);




