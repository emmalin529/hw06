function showMsg(msg1,msg2) {
    var allMsg = msg1 + msg2;
    return allMsg;
}
function random(m){
    console.log(m);
    return Math.floor(Math.random()*m+1);
}

function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
 
var maximum = max;
 
console.log(max(10, 20)); 
console.log(maximum(10, 20)); 

arr1=[1,3,5];
arr1.length;
arr1[3]