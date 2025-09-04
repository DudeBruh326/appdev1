console.log(0 == false);
console.log(0 === false);
let a;
let b = null;
console.log("a:", a, "| b:", b);
let obj = {
    regular: function() { console.log("regular this:", this); },
    arrow: () => { console.log("arrow this:", this); }
};
obj.regular();
obj.arrow();
let arrA = [1, 2, 3];
let arrB = arrA;
arrB.push(4);
console.log("arrA:", arrA, "| arrB:", arrB);
let arrC = [1, 2, 3];
let arrD = [...arrC];
arrD.push(4);
console.log("arrC:", arrC, "| arrD:", arrD);