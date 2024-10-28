"use strict";
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

function sumArray(region1) {
    let sum = 0;
    for (let i = 0; i < region1.length; i++) {
        sum += region1[i];
    }
    return sum;
}


function sumArray(region2) {
    let sum = 0;
    for (let i = 0; i < region2.length; i++) {
        sum += region2[i];
    }
    return sum;
}

function sumArray(region3) {
    let sum = 0;
    for (let i = 0; i < region3.length; i++) {
        sum += region3[i];
    }
    return sum;
}

function sumArray(region4) {
    let sum = 0;
    for (let i = 0; i < region4.length; i++) {
        sum += region4[i];
    }
    return sum;
}

function sumArray(region5) {
    let sum = 0;
    for (let i = 0; i < region5.length; i++) {
        sum += region5[i];
    }
    return sum;
}

const total = sumArray(region1);

document.getElementById("demo").innerHTML = total;

const total2 = sumArray(region2);

document.getElementById("demo2").innerHTML = total2;

const total3 = sumArray(region3);

document.getElementById("demo3").innerHTML = total3;

const total4 = sumArray(region4);

document.getElementById("demo4").innerHTML = total4;

const total5 = sumArray(region5);

document.getElementById("demo5").innerHTML = total5;
