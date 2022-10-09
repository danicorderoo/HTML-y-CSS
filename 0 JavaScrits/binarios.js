var num1 = 8;             
var num2 = 4;
var sum = num1+num2;
var newNum1 = ""
var newDec = 0;
var num1String = num1.toString(2);
var num2String = num2.toString(2);
var sumString = sum.toString(2);


for (var i = num1String.length - 1; i >= 0; i--) {
    newNum1 += num1String[i];
}


    console.log(num1String);



