// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min(...args); 
  }
}

// http://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  return arr.length;
}

function getFirst(arr) {
  return arr[0];
}

function getLast(arr) {
  return arr[arr.length-1];
}

function pushElement(arr) {
  var el=1;
  arr.push(el);  
  return arr;
}

function popElement(arr) {
  arr.pop(); 
  return arr;
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  rna = dna.replace(/T/gi, 'U');
  return rna;
}

// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  const newArray = x.map(num => num * 2);
  return newArray;
}

// http://www.codewars.com/kata/571ec274b1c8d4a61c0000c8

function helloWorld() {
  var str = 'Hello World!'
  console.log(str); 
}


// http://www.codewars.com/kata/571edd157e8954bab500032d

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v4   //set number value to a
  var b=v2   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5 //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}

// http://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


