let year = 2024; // you can change this value

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}
//working directory kum repo ku naduvula irukathu staging area git 
// add year.js cmt use pana nama file stageing are la irukum 

let n = 12; 
let a = 0, b = 1;

console.log("Fibonacci Series:");
console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
