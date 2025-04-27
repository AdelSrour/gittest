Q3.a
- On External.js ->print the value of number1 on console before number1 definition line ?!
//I will get undefined
console.log(number1);

Q3.b
-Create another internal script before external script in html and print the value of number1?
    <script>
        //I will get number1 is not defined
        console.log(number1);
    </script>
    <script src="./External.js"></script>

Q3.c
- Now add another internal script after external.js script in html file and print the same value?
    <script src="./External.js"></script>
    <script>
        //I will get value of number1 (6)
        console.log(number1);
    </script>

Q4. A
- try to console.log the values of value1,value2,value3 on consumingScript.js file ??

//will return error of not defined
console.log(value1);
console.log(value2);
console.log(value3);

Q4.B
-Try to call the function before definition line?
It will print array of 3 values because of hoisting

Q4.c
- Call the function with 3 values then print the return
console.log(printVariables(1,2,3));

Output: Array(3) [ 1, 2, 3 ]
Q4. D
- Try to call the function with less than 3 parameters printVariables(3,5) 

console.log(printVariables(1,2));

output: Array(3) [ 1, 2, undefined ]
To solve the problem we put a default value for value3
function printVariables(value1,value2,value3 = 0){
    return [value1, value2, value3];
}


Q4.e
- What if you call the function with too many parameters ? (more than 3)
It will only print the 3 values

Can you print them using (arguments)?

Yes using for of on arguments

function printVariables(value1, value2, value3 = 0) {
    let returnArr = []
    for (let arg of arguments) {
        returnArr.push(arg);
    }
    return returnArr;
}

Output: Array(4) [ 1, 2, 3, 4 ]

Q4.f
- Define var localVar=3; testingVar=5; inside the function’s block Before calling the function try to console.log the values localVar and testingVar.??

This will return not defined
Q4.g
- In step f , call the function and try to print localVar and testingVar?
This will return not defined
- Repeat step 1 but define the function as function expression
This will return not defined

Q5.
Functions accept 2 variables and return the summation result Testing: a- What if you insert less than 2 inputs? solve this problem using ES6 feature. b- What if the input is not a Number? Solve this problem using your logic

function test(value1, value2){

    //convert into numbers
    value1 = Number(value1);
    value2 = Number(value2);

    //check if nan
    value1 = isNaN(value1) ? 0 : value1;
    value2 = isNaN(value2) ? 0 : value2;
    
    //no args passed
    if (arguments.length == 0) return 0;

    //args less than 2, return first one
    if (arguments.length < 2) return value1;
    

    return value1 + value2;
}

console.log(test(1,2)); //3
console.log(test(1)); //1
console.log(test()); //0
console.log(test("qwe")); //0
