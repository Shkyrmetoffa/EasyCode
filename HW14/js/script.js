/*
TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
сделать счетчик 
перебирать массив
сравнивать элементы
записывать кол-во повторений
сделать проверку, если колво повторений нечётное, то
выводим это число
*/

solution([12, 23, 34, 12, 12, 23, 12, 45]); //-> [34 45]
solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]); //-> [4 100 5000]
solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]); //-> [6 5 9 21]
solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]); //-> [8 16 23 42]
solution([2, 2, 44, 44]); //=> []

function solution(arg) {
    let newArr = [];
    let newElem = {};
    let elems = arg.forEach(elem => {
        newElem[elem] !== undefined ? (newElem[elem] += 1) : (newElem[elem] = 1);
    });
    for (key in newElem) {
        if (newElem[key] % 2 !== 0) {
            newArr.push(+key);
        }
    }
    console.log(newArr);
}

/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;
const myRegExp = (str, homeDir, appDir, appName) => {
    let newStr = str
        .replace(/%%HOMEDIR%/g, homeDir)
        .replace(/%%APP_DIR%%/g, appDir)
        .replace(/%%APPNAME%%/g, appDir);
    console.log(newStr);
};

myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js');
/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)

 see main.html
*/
/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/

// app.render();
let data = {
    pageTitle: 'Java Script test',

    categories: [{
            categoryName: 'Какой результат будет у выражения?',
            firstSpan: 'null + {0:1}[0] + [,[1],][1][0]',

            categoryList: ['1', '2', 'undefined', 'NaN'],
            rightAnswer: 2
        },
        {
            categoryName: 'Что выведет этот код?',
            firstSpan: 'var a = [1,2];  (function() { alert(a) })()',
            secondSpan: '(function() { alert(a) })()',

            categoryList: ['[object Array]', '[object Object]', '1,2', 'Error'],
            rightAnswer: '[object Object]'
        },
        {
            categoryName: 'Яблоко стоит 1.15, апельсин стоит 2.30. Сколько стоят они вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?',

            categoryList: ['3,45', '3.45', '345', 'Ни один из вариантов выше'],
            rightAnswer: 'Ни один из вариантов выше'
        },
    ],
    button: 'Проверить мои результаты',
};
class Page {
    //create obj
    constructor() {}
    buildPage() {
        let wrapper = document.createElement('div'); //create div
        let titlePage = document.createElement('h1'); //create h1
        let formBox = document.createElement('form'); //create form

        wrapper.className = 'wrapper';
        titlePage.textContent = data.pageTitle; // create text

        document.body.appendChild(wrapper); // push wrapper to document body
        wrapper.appendChild(titlePage); //push h1 to wrapper
        wrapper.appendChild(formBox);
    }
    buildList() {
        for (let i = 0; i < data.categories.length; i++) {
            // add data.categories
            let categoryBox = document.createElement('div'); //create  div for form
            let titleCategory = document.createElement('h3');
            let firstSpan = document.createElement('span'); //create span
            let secondSpan = document.createElement('span');
            let listWrap = document.createElement('ul');

            categoryBox.className = 'categoryBox';
            document.querySelector('form').appendChild(categoryBox);

            firstSpan.textContent = data.categories[i].firstSpan; //add content to span
            secondSpan.textContent = data.categories[i].secondSpan;
            titleCategory.textContent = i + 1 + ' ' + data.categories[i].categoryName; // обращаемся по индексу

            titleCategory.appendChild(firstSpan); // add span to h3
            titleCategory.appendChild(secondSpan);
            categoryBox.appendChild(titleCategory); //push titleCategory to categoryBox
            categoryBox.appendChild(listWrap);

            for (let j = 0; j < data.categories[i].categoryList.length; j++) {
                let listItem = document.createElement('li');
                let labelFor = document.createElement('label');
                let checkBox = document.createElement('input');

                labelFor.htmlFor = 'checkBox_' + i + '_' + j; //add id
                labelFor.textContent = data.categories[i].categoryList[j];
                checkBox.className = 'my-checkbox';
                checkBox.setAttribute('type', 'checkBox');
                checkBox.id = 'checkBox_' + i + '_' + j;

                listWrap.appendChild(listItem);
                listItem.appendChild(checkBox);
                listItem.appendChild(labelFor);
            }
        }
    }
    buttonBuild() {
        let buttonWrap = document.createElement('div');
        let button = document.createElement('input');

        buttonWrap.className = 'buttonWrap';
        button.className = 'button';
        button.setAttribute('type', 'submit');
        button.setAttribute('value', data.button);

        document.body.appendChild(buttonWrap);
        buttonWrap.appendChild(button);

        button.onclick = function() {
            let checked = document.querySelectorAll(':checked + label');
            [...checked].forEach((elem, i) => {
                let ul = document.querySelectorAll('ul');
                const divAdd = document.createElement('div');
                divAdd.textContent = elem.textContent == data.categories[i].rightAnswer;
                divAdd.style.color = 'red';
                ul[i].insertAdjacentElement('beforeend', divAdd);
            });

        }
    }

    pageInit() {
        this.buildPage();
        this.buildList();
        this.buttonBuild();
    }
}

let page = new Page();
page.pageInit();