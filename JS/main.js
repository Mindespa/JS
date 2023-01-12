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

