var a=parseInt(prompt("enter a number:"));
var b=parseInt(prompt("enter a number:"));

for(let n=a;n<=b;n++){
let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
    } 
}