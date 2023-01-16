console.log("  1 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log("labas");
    
}

console.log("  2 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("  3 uzduotis");

let sk = 0;

let augalai = ["zole","roze","braske","tulpe","obelis","berzas","klevas","citrina","rugiai","salieras"];
console.log(augalai);

console.log("  4 uzduotis");

let augalai1 = ["zole","roze","braske","tulpe","obelis","berzas","klevas","citrina","rugiai","salieras"];
for (let i = 0; i < augalai1.length; i++){
    console.log(augalai1[i]);
}

console.log("  5 uzduotis");
 
let augalai2 = ["zole","roze","braske","tulpe","obelis","berzas","klevas","citrina","rugiai","salieras"];
for (let i = augalai2.length -1; i >= 0; i--){
    console.log(augalai2[i]);

}


console.log("  6 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i%2==0) {
        console.log(i);
    }
    
}

console.log("  7 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i%2==0) {
       if (i%10==0) {
        continue;
        
       }
        console.log(i);
    }    
    
}

