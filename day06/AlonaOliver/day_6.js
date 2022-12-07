import fs from "fs";

function loop(times, callback, prevStart) {
    let prev = prevStart;
    let _stop = false;
    const stop = () => _stop = true;
    for (let i = 0; i < times && !_stop; i++) {
        prev = callback(i, prev, stop);
    }
    return prev;
}

function createArray(length, value) {
    return Array.from({ length: length }).fill(value);
}

function print2dArray(arr2d, delim = "") {
    console.log(arr2d.reduce((result, row) => result + row.reduce((result, num) => result + num + delim, "").replace(new RegExp(`${delim}$`), "") + "\n", ""));
}

function binaryToStrign(binaryNumber, length = undefined) {
    return binaryNumber.toString(2).padStart(length, "0");
}

function bitShift(binaryNumber, shift) {
    return Math.floor(binaryNumber * Math.pow(2, shift)) >>> 0;
}

function getCharCode(character) {
    return character.charCodeAt(0);
}

//Offset is added to the charcode
function charFromCharCode(charCode, offset) {
    return String.fromCharCode(charCode + offset);
}

const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);
function isLowercase(character) {
    const charCode = getCharCode(character);
    return charCode >= aCharCode && charCode <= zCharCode;
}

const ACharCode = "A".charCodeAt(0);
const ZCharCode = "Z".charCodeAt(0);
function isUppercase(character) {
    const charCode = getCharCode(character);
    return charCode >= ACharCode && charCode <= ZCharCode;
}



function part1(test = false, doLog = false) {
    console.log(`\n-- Part 1 ${test ? "[test] " : ""}--`);
    const inputTest = fs.readFileSync(`day_${day}_input_test.txt`, "utf-8");
    const inputReal = fs.readFileSync(`day_${day}_input.txt`, "utf-8");
    const input = test ? inputTest : inputReal;

    let answer = 0;
    let section = "";
    for(let i = 0; i < input.length-4; i++){

        const indexOf = section.indexOf(input.charAt(i));
        if (section.length == 3 && indexOf == -1) {
            answer = i+1;
            break;
        } else{
            if(indexOf != -1) section = section.slice(indexOf+1);
            section += input[i];
        }

    }
    console.log(answer);
}

function part2(test = false, doLog = false) {
    console.log(`\n-- Part 2 ${test ? "[test] " : ""}--`);
    const inputTest = fs.readFileSync(`day_${day}_input_test.txt`, "utf-8");
    const inputReal = fs.readFileSync(`day_${day}_input.txt`, "utf-8");
    const input = test ? inputTest : inputReal;

    
    let answer = 0;
    let section = "";
    for(let i = 0; i < input.length-4; i++){

        const indexOf = section.indexOf(input.charAt(i));
        if (section.length == 13 && indexOf == -1) {
            answer = i+1;
            break;
        } else{
            if(indexOf != -1) section = section.slice(indexOf+1);
            section += input[i];
        }

    }
    console.log(answer);
    
}

const year = 2022;
const day = 6;

console.log(`\n<Year ${year} - Day ${day}>`);

part1(0, 1);
part2(0, 1);