// //Previous tasks
// // let name = 'Ivan';
// // let objName = {};
// //
// // let obj = function (name) {
// //     objName.name = name;
// //     console.log(objName);
// //     return objName;
// // }
// // obj(name);
// //
// // function makeObj() {
// //     let newName = objName.name.toUpperCase();
// //     console.log(newName);
// //     return newName;
// // }
// // makeObj(obj);
//
// // HW3
// let arr = [];
//
// arr[0] = 'gogo';
// arr[1] = 'togo';
// arr[2] = 'ololo';
//
// function addToArray(arr) {
//     arr[arr.length] = 'rrrrr';
//     console.log(arr);
// }
// addToArray(arr);
// //2
// let userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
// function simpleObjGenerator(param1, param2, param3) {
//     let obj = {};
//     obj.argument1 = param1;
//     obj.argument2 = param2;
//     obj.argument3 = param3;
//     console.log(obj);
//
//     obj.argument2 = userNames;
//     return obj;
// }
// simpleObjGenerator('protocol', { url: '22' }, 8000);
// simpleObjGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase());
// /*
//  3.  Напишите функцию которая принимает 3 аргумента,
//  третий аргумент - это объект.
//
//  Функция создает новый объект и добавляет ключ
//  это первый аргумент, а значение - второй аргумент
//  Проверяет если есть свойство name в переданном объекте,
//  тогда добавляет данное свойство и возвращает новый объект
//
//  var myName = { name: 'Oleg' };
//
//  function addNameToUser(newKey, newValue, userName) {
//
//  }
//  */
// let myName = { name: 'Oleg' };
//
// function addNameToUser(newKey, newValue, userName) {
//     let newName = {};
//     newName[newKey] = newValue;
//     newName.name = newName.name || userName.name;
//         return newName;
//     }
// console.log(addNameToUser('family', '%Lustenko%', myName));
// /* {name:'Oleg', family:'%Lustenko%'} */
// console.log(myName);
// /* {name:'Oleg'} */
//
// // Напишите функцию которая принимает 3 аргумента,
// //     третий аргумент - это объект.
// //
// //     Функция создает новый объект и добавляет ключ
// // это первый аргумент, а значение - второй аргумент
// // Проверяет если есть свойство name в переданном объекте,
//     // тогда добавляет данное свойство и возвращает новый объект
// function fizzBuzz(num) {
// if(num % 3 === 0 || num % 5 === 0) {
//     if(num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if(num % 3 === 0) {
//         console.log("Fizz");
//     }else {
//         console.log("Buzz");
//     }
// }else {
//     console.log(num);
//     }
// }
// fizzBuzz(1); // 1
// fizzBuzz(2); // 2
// fizzBuzz(3); // 'Fizz'
// fizzBuzz(5); // 'Buzz'
// // ...
// fizzBuzz(15); // 'FizzBuzz'
// fizzBuzz(21); // 'Fizz'
// /* -> @@ SUPER 2
//  Напишите функцию, которая будет принимать 4 аргумента,
//  последний всегда функция.
//  Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
//
//  */
// function fourArg(arg1, arg2, arg3, arg4) {
//     let newArr = [];
//     newArr[0] = arg1;
//     newArr[1] = arg2;
//     newArr[2] = arg3;
//     arg4(newArr);
// }
// fourArg(2, 4, 6, function(e) {
//     console.log(e);
// });
/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

// function numbersBetween(a, b) {
//     let arr = [];
//     if (a < b && a !== b) {
//         for (let i = a + 1; i < b; i++) {
//             arr.push(i);
//         }
//         return arr ;
//     }
// }
// console.log(numbersBetween(1, 5)); // 2,3,4
// console.log(numbersBetween(3, 6)); // 4,5
// console.log(numbersBetween(12, 15)); // 13,14
// console.log(numbersBetween(10, 15)); // 11, 12, 13, 14
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */
// function fizzBuzz(num) {
//     for (num = 0; num < 100; num++) {
//         if(num % 3 === 0 || num % 5 === 0) {
//     if(num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if(num % 3 === 0) {
//         console.log("Fizz");
//     }else {
//         console.log("Buzz");
//     }
// }else {
//     console.log(num);
//     }
//         }
// }
// fizzBuzz(1); // 1
// fizzBuzz(2); // 2
// fizzBuzz(3); // 'Fizz'
// fizzBuzz(5); // 'Buzz'
// // ...
// fizzBuzz(15); // 'FizzBuzz'
// fizzBuzz(21); // 'Fizz'
/*
3. Напишите функцию которая принимает 1 аргумент - массив
И возвращает новый массив содержащий типы значений переменных
*/
// function getTypeVal(arr1) {
//     let i;
//     let newArr = [];
//     for(i = 0; i < arr1.length; i++) {
//         if(Array.isArray(arr1[i])) {
//             newArr.push(arr1[i]);
//         } else if (arr1[i] === null) {
//             newArr.push('null');
//         }
//         else {
//             newArr.push(typeof arr1[i]);
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }
// getTypeVal([1, null, undefined, 'str', {}, [444], function() {}, true]);

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив
 содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
    (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);
// console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35
function solution(arr) {
    let i;
    let newArr = [];
for(i = 0; i<arr.length; i++) {
    let elem = arr[i];
    function checkElem() {
        if(isNaN(elem.age)) {
            elem['unknownAge'] = 'true';
            newArr.push(elem);
        }
    }
    checkElem(elem);
}
    return newArr;
}
function returnArr(argument) {
   console.log(argument);
}
returnArr(solution(array));
