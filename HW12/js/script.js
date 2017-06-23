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
Http.prototype.createServer = function(ctx, next) {
    this.ctx = {
        req: {
            PORT: 8800,
            url: '/shkyrmetoffa/github.com',
            res: {},
            status: 404,
            message: 'you should type your email',
            header: {
                contenttype: 'application/json',
            },
        },
    };
    this.next = function() {
        return this;
    };
    return this;
};
Http.prototype.listen = function(host, port) {
    console.log(`Server running on https://${host}:${port}`);
    return this;
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