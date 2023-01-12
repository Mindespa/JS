let name = "Mindaugas";
let surname = "Spakauskas";
let birthYear = 1984;
let currentYear = 2023;
console.log("As esu " + name +  " " + surname +".Man yra " + (currentYear - birthYear) + " " + "metai" );

console.log("===== 2 uzduotis =======");

let num1 = (Math.random() * 4);
let num2 = (Math.random() * 4);
console.log(num1);
console.log(num2);
if(num1 !=0 && num2 !=0){
}
if (num1 < num2 ) {
    console.log(Math.round( num2 / num1 * 100) / 100);
}else{
    console.log(Math.round( num1 / num2 * 100) / 100);
}


// let rezult = num2 / num1;
// console.log(Math.round( rezult * 100) / 100);

console.log("===== 3 uzduotis =======");

   let n1 = (Math.random() *25);
   let n2 = (Math.random() *25);
   let n3 = (Math.random() *25);
   console.log(n1, n2, n3);
   if ((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)){
   console.log(n1);
   }
   if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3) ){
   console.log(n1);
   }
   if( (n3 > n2 && n3 < n1) || (n3 < n2 && n3 > n1)){
    console.log(n1);
   }


console.log("===== 4 uzduotis =======");

let a = 1 + Math.round(Math.random() * 9 );
let b = 1 + Math.round(Math.random() * 9 );
let c = 1 + Math.round(Math.random() * 9 );
console.log(a, b, c);

if(a + b > c && a + c > b && b + c > a){
    console.log("turime trikampi");
}else{
    console.log("neturime");
}

console.log("===== 5 uzduotis =======");

let nr1 = Math.round(Math.random() * 2);
let nr2 = Math.round(Math.random() * 2);
let nr3 = Math.round(Math.random() * 2);
let nr4 = Math.round(Math.random() * 2);

console.log(nr1, nr2, nr3,nr4);

let count0 = 0;
let count1 = 0;
let count2 = 0;

if (nr1 == 0){
    count0++;
}

if (nr2 == 0){
    count0++;
}

if (nr3 == 0){
    count0++;
}

if (nr4 == 0){
    count0++;
}

if (nr1 == 1){
    count1++;
}

if (nr2 == 1){
    count1++;
}

if (nr3 == 1){
    count1++;
}

if (nr4 == 1){
    count1++;
}

if (nr1 == 2){
    count2++;
}

if (nr2 == 2){
    count2++;
}

if (nr3 == 2){
    count2++;
}

if (nr4 == 2){
    count2++;
}

console.log(count0, count1, count2);


