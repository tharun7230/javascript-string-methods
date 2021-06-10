/* 20 String Methods saaving for record purpose*/

var stringOne = "Build bridges not walls";
var stringTwo = "hustle until tired";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
console.log(stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("to"));

// fromCharCode()
console.log(String.fromCharCode(114));

// includes()
console.log(stringTwo.includes("end"));

// indexOf()
console.log(stringTwo.indexOf("end"));

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

// match()
console.log(stringTwo.match(/end/g));

// repeat()
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));

// slice()
console.log(stringTwo.slice(2, 4));

// split()
console.log(stringOne.split(" "));

// startsWith()
console.log(stringOne.startsWith("freedom"));

// substr()
console.log(stringTwo.substr(2, 4));

// substring()
console.log(stringTwo.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringOne.toUpperCase());

// trim()
var stringThree = "     Tharun Kumar!      ";
console.log(stringThree.trim());