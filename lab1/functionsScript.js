console.log(printVariables(1, 2, 3));
console.log(printVariables(1, 2));
console.log(printVariables(1, 2, 3, 4));


function printVariables(value1, value2, value3 = 0) {
    let returnArr = []
    for (let arg of arguments) {
        returnArr.push(arg);
    }
    return returnArr;
}

// function func2() {
//     var localVar = 3;
//     var testingVar = 5;
// }

// //not defined error
// // console.log(localVar);
// // console.log(testingVar);

// // func2();

// //not defined error
// // console.log(localVar);
// // console.log(testingVar);


// // var func3 = function() {
// //     var localVar = 3;
// //     var testingVar = 5;
// // }

// // func3();
// // //not defined error
// // console.log(localVar);
// // console.log(testingVar);


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