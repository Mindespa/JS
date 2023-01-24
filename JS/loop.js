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

let augalai = ["zole", "roze", "braske", "tulpe", "obelis", "berzas", "klevas", "citrina", "rugiai", "salieras"];
console.log(augalai);

console.log("  4 uzduotis");

let augalai1 = ["zole", "roze", "braske", "tulpe", "obelis", "berzas", "klevas", "citrina", "rugiai", "salieras"];
for (let i = 0; i < augalai1.length; i++) {
    console.log(augalai1[i]);
}

console.log("  5 uzduotis");

let augalai2 = ["zole", "roze", "braske", "tulpe", "obelis", "berzas", "klevas", "citrina", "rugiai", "salieras"];
for (let i = augalai2.length - 1; i >= 0; i--) {
    console.log(augalai2[i]);

}


console.log("  6 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}

console.log("  7 uzduotis");

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) {
            continue;

        }
        console.log(i);
    }

}

console.log("  8 uzduotis");

let count = 0;
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        count++;

    }
}
console.log(count);

console.log("  9 uzduotis");

let count5 = 0;
let count7 = 0;
for (let i = 0; i < augalai.length; i++) {
  if (augalai[i].length < 5) {
      count5++;

  }
    if(augalai[i].length > 7){
        count7++;
    }
}
console.log("augalu trumpesniu nei 5 simboliai yra " + count5, ",o ilgesniu nei 7 simboliai yra " + count7);

console.log(" SUNKESNI 1 uzduotis");

let skaiciai = 0;
let myResult = "";
for (let i = 0; i < 300; i++) {
    let rndNum = Math.round(Math.random() * 300);

    if (rndNum >= 150) {
        skaiciai++
    }

    if (rndNum >= 275) {
        myResult += "[" + rndNum + "] ";
    } else {
        myResult += rndNum + " ";
    }


}
console.log(myResult);

console.log(" SUNKESNI 2 uzduotis");

let numeriai = "";
for (let i = 77; i < 3000; i += 77) {
    numeriai += i + (",");
}
console.log(numeriai.slice(0, -1));

console.log(" SUNKESNI 3 uzduotis");


let row = ".";
for (let a = 0; a < 10; a++) {
     
    row = "";
    for (let i = 0; i < 10; i++) {
        row += "*";
    }
    
    console.log(row);
}

console.log(" SUNKESNI 5a uzduotis");

while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        break;
    } else {
        console.log("S");
    }

}

console.log(" SUNKESNI 5b uzduotis");

count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count++;
    } else {
        console.log("S");
    }
    if (count == 3) {
        break;
    }

}

console.log(" SUNKESNI 5c uzduotis");

count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if (chance) {
        console.log("H");
        count++;
    } else {
        console.log("S");
        count = 0;
    }
    if (count == 3) {
        break;
    }

}

console.log(" SUNKESNI 6 uzduotis");

let petrasCount = 0;
let kazysCount = 0;

while (true){

let petras = 10 + Math.round(Math.random() * (10));
let kazys = 5 + Math.round(Math.random() * (20));
petrasCount += petras;
kazysCount += kazys;
console.log("petras " + petras + " kazys " + kazys);

if (petrasCount >= 222 || kazysCount >= 222){
    break;
}

}

if (petrasCount < kazysCount) {
    console.log("Partija laimejo: laimetojas kazys, surinko " + kazysCount + "tasku o jo varzovas " + petrasCount );
} else {
    console.log("Partija laimejo: laimetojas petras, surinko " + petrasCount + "tasku o jo varzovas " + kazysCount );
    
}


console.log(" SUNKESNI 8 uzduotis");

  
for (let i = 0; i < 5; i++) {
   
let nailDepth = 0;
let smugis = 0;
while (nailDepth < 85) {
    let smugis = 5 + Math.round(Math.random() * (15));
    nailDepth += smugis;
    smugisCount++;
    }  
    console.log((i+1) + "-asis vinis buvo ikaltas " + smugisCount + "smugis.Gylis -", nailDepth );  
}

