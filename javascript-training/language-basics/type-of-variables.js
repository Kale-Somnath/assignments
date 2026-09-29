
//1. Local variable- Variable declared inside the block ->can only access inside the block
//2. Global variable- Variable declared outside the block ->Can access everywhere

let empName= "Somnath";  //Global variable

{
    let empAge=30;  //Local variable

    console.log(empName);  //able to access
    console.log(empAge);  //able to access inside of the block
}

console.log(empName);  //able to acess
console.log(empAge);  //not able to access