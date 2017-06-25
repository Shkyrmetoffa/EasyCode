'use strict';
/*
 *
 * 
 * 
 * 
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
function Http() {
    // constructor
}
Http.prototype.createServer = function(func) {
    let ctx = {
        req: {
            PORT: 8800,
            url: '/shkyrmetoffa/github.com',
            res: {},
            status: 404,
            message: 'you should type your email',
            header: {
                'content-type': 'application/json',
            },
        },
    };
    this.func = () => {
        func.call(this, ctx, () => {});
    };
    return this;
};
Http.prototype.listen = function(host, port) {
    console.log(`Server running on https://${host}:${port}`);
    this.func();
};

const server = new Http()
    .createServer(function(ctx, next) {
        console.log(ctx);
    })
    .listen(3000, 'localhost');
// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human
function Human() {
    //Class Human
    this.name = 'John';
    this.age = 30;
    this.sex = 'male';
    this.height = 178;
    this.weight = 77;
}

function Worker(place, salary) {
    // class worker with working method
    this.work = place;
    this.salary = salary;
    this.working = function() {
        return 'go work';
    };
}
Worker.prototype = new Human(); // inheritance of Human

function Student(_education, _grant) {
    // Class Student with watchSeries method
    this.education = _education;
    this.grant = _grant;
    this.watchSeries = function() {
        return 'watch';
    };
}
Student.prototype = new Human(); // inheritance of Human

var newStudent1 = new Student('KNU', 787); // instances of Student
var newStudent2 = new Student('KPI', 467);
var newStudent3 = new Student('KNURE', 39658);

var newWorker1 = new Worker('It', 1200); //instances of Student
var newWorker2 = new Worker('Economyst', 850);

console.log('newStudent1', newStudent1.age);
console.log('newStudent2', newStudent2.education);
console.log('newStudent3', newStudent3.watchSeries());

console.log(newWorker1.name);
console.log(newWorker2.working());
// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 */
let sumFunc = function sum(num) { //создаем функцию, которая возвращает сумму переданного арг и записываем
    // в переменную
    return num += 2;
};

function decorator(func) { // функция обёртка, которая принимает в качестве арг основную ф-ю
    return function() { // замыкание
        let result = func.apply(this, arguments) // передаем в функцию sumFunc контекс this и псевдомассив арг при помощи apply. Вызов записываем в переменную
        console.log(`Function result: ${result}`);
        return result; // возвращаем переменную с результатом вызова sum
    }
}
sumFunc = decorator(sumFunc); // вызов ф-ии декоратора с параметром - ф-ей sumFunc
sumFunc(5); // вызов ф-и с переданными ей параметрами
// Wrapper function
function wrap(fn) {
    return function(...args) {
        console.log(args);
        fn.apply(this, args);
    };
}

function fn(a, b) {
    return 'сумма', a + b;
}
wrap(fn)(2, 4);