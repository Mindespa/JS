console.log(" 1 uzduotis");

let name = "Benicio";
let surname = "Deltoro";
console.log(name.length);
console.log(surname.length);
if (name.length < surname.length) {
    console.log(name);
} else if (name.length = surname.length) {
    console.log(name + " " + surname);
} else {
    console.log(surname);
}

console.log(" 2 uzduotis");


let name2 = "Benicio";
let name3 = "Deltoro";
console.log(name2.toUpperCase() + " " + name3.toLowerCase());

console.log(" 3 uzduotis");

let actname = "Benicio";
let actsrnm = "Deltoro";
let nmsrnm = "";
nmsrnm += actname.charAt(0);
nmsrnm = nmsrnm + actname.charAt(0);
nmsrnm += actsrnm.charAt(0);
// nmsrnm = nmsrnm + actsrnm.charAt(0);
// console.log(actname.charAt(0)+actsrnm.charAt(0));
console.log(nmsrnm);

console.log(" 4 uzduotis");

let aname = "Benicio";
let bname = "Deltoro";
let abname = aname.substring(aname.length - 3) + " " + bname.substring(bname.length - 3);
console.log(abname);

console.log(" 5 uzduotis");

let word = "An American in Paris";

console.log(word.replaceAll("A","*").replaceAll("a","*"));

console.log(" 6 uzduotis");

let weirdText = "An American in Paris";
console.log( weirdText.replaceAll(/[aeiou]/gi, ''));
let weirdText1 = "Breakfast at Tiffany's";
console.log( weirdText1.replaceAll(/[aeiou]/gi, ''));
let weirdText2 = "2001: A Space Odyssey";
console.log( weirdText2.replaceAll(/[aeiouy]/gi, ''));
let weirdText3 = "It's a Wonderful Life";
console.log( weirdText3.replaceAll(/[aeiou]/gi, ''));

console.log(" 7 uzduotis");

let weirdText4 = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
console.log(weirdText4);

console.log(weirdText4.charAt(weirdText4.length - 14));

