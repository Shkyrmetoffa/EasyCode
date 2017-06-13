'use strict';

// Legolas Task !
const user = {
    name: 'Jack',
    fruits: 'mango, kivi, banan',
    friends: [{
            name: 'Legolas',
            fruits: 'apple',
        },
        {
            name: 'Gendalf',
            fruits: 'lime',
        },
        {
            name: 'Frodo',
            fruits: 'Хлебцы',
        },
    ],
    showFruits() {
        console.log(this.fruits);
    },
    showFriendsFruits() {
        this.friends.forEach(function(elem) {
            user.showFruits.call(elem);
        });
    },
};
console.log(user.showFruits());
console.log(user.showFriendsFruits());

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requires: ['Node.js', 'JavaScript', 'OOP'],
    goodDev: goodDev,
    getArr: getArr,
};
let developer2 = {
    experience: [
        { technology: 'java' },
        { technology: 'c++' },
        { technology: 'aws' },
        { technology: 'docker' },
    ],
    requires: ['java', 'json', 'c++', 'JavaScript'],
    goodDev: goodDev,
    getArr: getArr,
};

function getArr() {
    return this.skills ?
        this.skills :
        this.experience.map(elem => elem.technology);
}

function goodDev(dev) {
    this.requires.forEach(elem => {
        if (dev.getArr.call(dev).includes(elem)) {
            console.log(`required: ${elem} ...sucsess`);
        } else {
            console.log(`required: ${elem} ...fail`);
        }
    });
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
    console.log(`developer ${index + 1}`);
    dev.goodDev(dev);
});
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success
/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

let myObject = {
    database: [{ age: 100, name: 'b' }, { age: 15, name: 'c' }, { age: 25, name: 'a' }],
    myFilter: myFilter,
};

function myFilter(key) {
    this.database.sort((param1, param2) => {
        if (param1[key] > param2[key]) {
            return 1;
        } else if (param1[key] < param2[key]) {
            return -1;
        }
    });
    return this.database;
}
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [
    'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3, [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9,
];

let moveZeroToEnd = arr => {
    let tempArr = [];
    let newArr = [];
    arr.forEach(elem => {
        elem === 0 ? newArr.push(elem) : tempArr.push(elem);
    });
    return tempArr.concat(newArr);
};
console.log(moveZeroToEnd(arr1));
// /*
//  2. Верните сумму двух найменьших чисел в массиве
//
//  [10,20,30,1,31,11,10] => 11
//  [-1,0,25] => -1
//  [-4,-10,25,10] => -14
//  [0,200,10,25,15] => 10
//
//  */
let arr = [0, 200, 10, 25, 15];
let minimalNumber = arr => {
    let newArrSort = arr.sort((a, b) => a - b);
    return newArrSort[0] + newArrSort[1];
};
console.log(minimalNumber(arr));
// // /*
// //  3. Напишите функцию которая меняет местами имя и фамилию
// //  */
let nameShuffler = string => string.split(' ').reverse().join(' ');

console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));
// // /*
// //  // !
// //  4. Напишите функцию которая принимает массив с именами и возвращает массив
// //  в котором каждая буква становится заглавной
// //  capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// //  capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
// //  */
// //
let getName = arrName =>
    arrName.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
console.log(getName(['jo', 'nelson', 'jurie']));
console.log(getName(['KARLY', 'DANIEL', 'KELSEY']));
//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */
let findNum = arrStep => {
    let step = (arrStep[arrStep.length - 1] - arrStep[0]) / arrStep.length;
    let arr = arrStep.reduce((preval, val, i, arr) => {
        if (preval + step === val) {
            console.log((preval += step));
        } else {
            console.log((preval += step));
        }
        return preval;
    });
};
console.log(findNum([1, 3, 5, 9]));