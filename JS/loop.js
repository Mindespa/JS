console.log("  1 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log("labas");
    
}

console.log("  2 uzduotis");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("  6 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i%2==0) {
        console.log(i);
    }
    
}

console.log("  7 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i%2==0 || i%10==0) {
        continue;
    }    
    console.log(i);
    
}