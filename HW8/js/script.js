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
    while (str.includes('[]') || str.includes('{}') || str.includes('()')) {
        str = str.replace('[]', '').replace('{}', '').replace('()', '');
    }
    if (str.length) {
        return false;
    } else {
        return true;
    }
}

console.log(validBraces('(){}[]')); //=> returns true
console.log(validBraces('(}')); //=> returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); //=> returns true
/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {
            console.log(i);
            if (i == 10) {
                fn();
            }
        }, i * 1000);
    }
}

makeCallback(function() {
    console.log('THE LAST LAST comment');
});
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

function sum(n) {
    let summ = 0;
    for (let i = 0; i <= n; i++) {
        summ += i;
    }
    if (sum[n] == undefined) {
        sum[n] = summ;
        console.log(`${sum[n]} Новое значение`);
    } else {
        console.log(`${sum[n]} Из кеша`);
    }
}
console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэша

console.log(sum(6)); // 21 Кешировано
console.log(sum(6)); // 21 Значение взято из кэша