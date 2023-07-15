let array = [
    1,
    2,
    3,
    4,
    5
];
array.push(10, 11, 12); // pushes new number in from last index

array.pop() // remove the element present in last index

array.unshift(1312, 123); // pushes new number in from 0 index

array.shift();
// remove the element present in 0 index

// in array we can store any element of any datatype

// array = null;

array.push('Moiz', 19, 20.21, {name: 'Moiz'});

// includes use to chec if the array have that element or not
// const nameArray = ['Ali', 'Ahamed', 'Moiz', 'Zafar', 'Ali'];
// console.log(nameArray.includes('Ali',1));

// now what if we have to check in btw objects... so for objects we will be needing method called 'FIND'

const objArray = [
    {
        name: 'ALi',
        pay: '20000'
    }, {
        name: 'Lia',
        pay: 10000
    }, {
        name: 'ail',
        pay: 30000
    }
]
// console.log(objArray.includes({name: 'Lia', pay: 10000})); // false mehtod...

// console.log(objArray.find(function(element){
//     return element.pay === 30000
// }));
// // above are simple fucntions... lets move on to arrow function

// console.log(objArray.find(element => {
//     return element.name === 'ALi'
// }));
// // can also be written as
// console.log(objArray.find(element => element.name === 'ALi'));

// concatination and slicing of an arrays

// let a = [1,2,3,4,5]
// let b = [6,7,8,9,10]
// let c = a.concat(b);
// c = c.slice(3,8);

var a = Number('123');
console.log(a);
