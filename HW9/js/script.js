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
    return this.experience.map(elem => elem.technology);
}

function goodDev(dev) {
    this.requires.forEach(elem => {
        if (
            dev.getArr.call(developer2).includes(elem) || dev.skills.includes(elem)
        ) {
            return `required: ${elem} ...sucsess`;
        } else {
            return `required: ${elem} ...fail`;
        }
    });
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
    console.log(`developer ${index + 1}`);
    dev.goodDev();
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

// function moveZeroToEnd(arr) {
//     let tempArr = [];
//     let elem = [];
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             newArr.push(arr[i]);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr.concat(newArr);
// }
// console.log(moveZeroToEnd(arr1));
// /*
//  2. Верните сумму двух найменьших чисел в массиве
//
//  [10,20,30,1,31,11,10] => 11
//  [-1,0,25] => -1
//  [-4,-10,25,10] => -14
//  [0,200,10,25,15] => 10
//
//  */
// // let arr = [0, 200, 10, 25, 15];
//     function compareNumeric(a, b) {
//         if (a > b) return 1;
//         if (a < b) return -1;
//     }
// let newArrSort =arr.sort(compareNumeric);
//     function minimalNumber(arr) {
//         return arr[0] + arr[1];
//     }
// console.log(minimalNumber(newArrSort));
// // /*
// //  3. Напишите функцию которая меняет местами имя и фамилию
// //  */
// function nameShuffler(string) {
//     let arr = string.split(' ').reverse();
//     let newName = arr.join(' ');
//     return newName;
// }
// console.log(nameShuffler('john McClane'));
// console.log(nameShuffler('Arnold Schwarzenegger'));
// console.log(nameShuffler('James Bond'));
// // /*
// //  // !
// //  4. Напишите функцию которая принимает массив с именами и возвращает массив
// //  в котором каждая буква становится заглавной
// //  capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// //  capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
// //  */
// //
// function getName(arrName) {
//     let name;
//     let newName = [];
//     for (let i = 0; i < arrName.length; i++) {
//         arrName[i] = arrName[i].toLowerCase();
//         name = arrName[i].split('');
//         name[0] = name[0].toUpperCase();
//         name = name.join('');
//         newName.push(name);
//     }
//     return newName;
// }
// console.log(getName(['jo', 'nelson', 'jurie']));
// console.log(getName(['KARLY', 'DANIEL', 'KELSEY']));
//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */
// function findNum(arrStep) {
//     let a = arrStep[0];
//     let b = arrStep[arrStep.length - 1];
//     let c = arrStep.length;
//     let step = (b - a) / c;

//     console.log(step);
// }
// console.log(findNum([1, 3, 5, 9]));