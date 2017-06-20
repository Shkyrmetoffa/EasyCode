/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
    let y = 5;
    t();
};
console.log(y);

z(x);
// function x return y = 5;
// function z gets it as if it was a param. After that, function x is
// called in function z and gets y = 5. Thats why z(x) return 5 of context in z function.
// But console.log(y) //5 of global context window.
//
// But i was wrong exactly
// function x moved like param. t() has only body of x and arrow function doesn't have
// return. If we write return t(), we could have 5. That's it.
/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(teg) {
    return `<${teg}></${teg}>`;
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>
/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {};
ezjQuery.add = function(teg) {
    if (typeof teg === 'string') {
        console.log((teg = `<${teg}></${teg}>`));
        return this;
    }
    return this;
};
console.log(ezjQuery.add('body')); //<body></body>
console.log(ezjQuery.add('body').add('div')); //<body></body><div></div>
console.log(ezjQuery.add('body').add('div', 'hello').add('h1')); //<body></body><div></div><h1></h1>
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */
// example
let a = function() {
    return (
        `<${arguments[0]}>` +
        (arguments[1] == undefined ? '' : arguments[1]) +
        `</${arguments[0]}>`
    );
};

let tegs1 = function() {
    let string = '';
    tegs1.add = function(teg, add) {
        string =
            string.slice(0, string.indexOf('></') + 1) +
            $(teg, add) +
            string.slice(string.indexOf('></') + 1, string.length);
        return this;
    };
    tegs1.render = function() {
        let ret = string;
        string = '';
        return ret;
    };
};
var ezjQuery1 = tegs1;
ezjQuery1();
var helloList = ezjQuery1
    .add('body') // <body></body>
    .add('div') // <body><div></div></body>
    .add('ul') // <body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery1
    .add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log(bodyDiv); //<body><div

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)