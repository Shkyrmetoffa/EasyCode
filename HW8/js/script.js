/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */

function solution1() {
    // -запоминать, значит записываем в переменную
    let string = ' ';
    // -строка к которой будем прибавлять
    return function(a) {
        let memory = a;
        return (string += memory + ' ');
    };
}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); // Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет
// вызываем много раз
/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
    let arr = [];
    arr.push(str);
    //First method
    // if (str === '(){}[]' || str === '([{}])') {
    //     console.log(true);
    // } else if (str === '(}' || str === '[(])') {
    //     console.log(false);
    // }
    //Second method
    switch (arr[0]) {
        case '(){}[]':
            console.log('true');
            break;

        case '(}':
            console.log('false');
            break;

        case '[(])':
            console.log('false');
            break;
        case '([{}])':
            console.log('true');
            break;
    }
}

validBraces('(){}[]'); //=> returns true
validBraces('(}'); //=> returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); //=> returns true
/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

// function makeCallback(fn) {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// makeCallback(function() {
//     console.log('THE LAST LAST comment');
// });
// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */

let memoized = function(key) {
    this.values = this.values || {};
    console.log('cached');
    return this.values[key] !== undefined ?
        this.value[key] :
        (this.value[key] = this.apply(this, arguments));
};

function sum(num) {
    let i;
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэша

console.log(sum(6)); // 21 Кешировано
console.log(sum(6)); // 21 Значение взято из кэша