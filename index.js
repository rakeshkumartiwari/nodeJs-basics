const squre = require('./squre');


const calculateSqure = (a) => {
    console.log(`The value of a is ${a} and the area is ${squre.area(a)}`);
    console.log(`The value of a is ${a} and the perimeter is ${squre.perimeter(a)}`);
}

calculateSqure(5);

console.log(__dirname);
console.log(__filename);

