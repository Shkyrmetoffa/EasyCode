// const app = {
//     appName: 'Тест по программированию',
//     questions: [{
//             name: 'Вопрос 1',
//             answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
//             rightAnswers: [2]
//         }, // приходят с сервера
//         {
//             name: 'Вопрос 2',
//             answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
//             rightAnswers: [1]
//         }, // приходят с сервера
//         {
//             name: 'Вопрос 3',
//             answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
//             rightAnswers: [2]
//         } // приходят с сервера
//     ],

//     createLi() {
//         return this.new('li');
//     },
//     createQuestions(question) {

//     },

//     createAnswer(answer) {
//         const liAnswer = this.createLi();
//         const label = this.new('label');
//         label.textContent = answer;
//         const input = this.new('input');
//         input.setAttribute('type', 'checkbox');
//         liAnswer.appendChild(input);
//         // console.log(input.getAttribute('type'));
//         liAnswer.appendChild(label);
//         return liAnswer;
//     },
// getMainParent(elem) {
//     let newElem = elem.document.parentElement;
//     if (newElem !== body) {
//         getMainParent(newElem);
//     }
//     console.log(newElem);
// },
// render() {
// 1. Создаём  main
// 2. Создаём вопросы
// 3. Создаём ответы
// const body = document.body;
// const main1 = this.new('main');
// const h1 = this.new('h1');
// h1.textContent = this.appName;
// const ol = this.new('ol');
//const button = this.new('button');
//const button2 = this.new('button');

// button.textContent = 'Проверить';
//button2.textContent = 'Submit';
//button.onclick = function() {
//             const ul = document.querySelectorAll('ul');
//             [...ul].forEach((elem, i) => {
//                 // console.log(this);
//                 const divAdd = document.createElement('div');
//                 divAdd.textContent = 'True';
//                 console.log(elem.children[1]);
//                 elem.children[1].children[0].checked = true;

//                 if (i == 1 || i == 4 || i == 7) {
//                     elem.checked = true;
//                 }
//                 elem.insertAdjacentElement('afterend', divAdd);
//             });

//         }
//         const main = document.querySelector('.main');

//         // console.log(main);
//         const JavaScriptOneLove = ['Arrow', 'Closures', 'Symbol'];
//         const createList = arr => {
//             let emptyStr = '<ul>';
//             arr.forEach(elem => {
//                 emptyStr += `<li>${elem}</li>`;
//             });
//             emptyStr += '</ul>';
//             return emptyStr;
//         }
//         button2.onclick = () => {
//             main.innerHTML += createList(JavaScriptOneLove);
//             main.insertAdjacentHTML('afterbegin', 'I like js');
//             main.insertAdjacentHTML('beforeEnd', 'My salary is 1500$');

//         }

//         main1.appendChild(h1);
//         main1.appendChild(ol);
//         main1.appendChild(button);
//         main1.appendChild(button2);

//         this.questions.forEach(question => {
//             const li = this.createLi();
//             const h3 = this.new('h3');
//             h3.textContent = question.name;
//             const ul = this.new('ul');

//             question.answers.forEach(answer => {
//                 /* ---------------------------- */
//                 const htmlAnswer = this.createAnswer(answer);
//                 /* ---------------------------- */
//                 ul.appendChild(htmlAnswer);

//             });
//             li.appendChild(h3);
//             li.appendChild(ul);
//             ol.appendChild(li);
//         });
//         body.appendChild(main1);
//     },
//     new(tag) {
//         return document.createElement(tag);
//     }
// };

//app.render();
// 17 lesson
//let button = document.getElementById('button');
//let colorArr = ['red', 'green', 'pink', 'blue', 'black'];

//function changeColor() {
//// button.onclick = function() {
//button.classList.toggle('root');

// };
// let position = 0;
//button.onmousemove = function() {
//let root = parseInt(button.style.left) || 0;
//button.style.position = 'relative';

//button.style.left = ++root + 'px';
//};
//}
//changeColor();
// let tbody = document.querySelector('tbody');

// tbody.addEventListener('click', (e) => {
//     if (e.target.tagName === 'TD') {
//         e.target.style.backgroundColor = 'red';

//     }



// })
// let block1 = document.querySelector('.block1');
// let block2 = document.querySelector('.block2');
// let block3 = document.querySelector('window');
// console.log(block3);
// window.addEventListener('keydown', (e) => {
// if (e.key === 'F1') {
//     e.preventDefault();
// }
// if (e.keyCode >= 112 && e.keyCode <= 123) {
// console.log(e);
// e.preventDefault();
// }
// });
// block2.addEventListener('click', () => alert('hello2'));
// block3.addEventListener('click', () => alert('hello3'));

// Class 21

// const usersId = [1, 2, 3];
// const url = 'https://jsonplaceholder.typicode.com/users/';
// let button = document.getElementById('button');
// let main = document.querySelector('.main');

// const serverRequest = (url, index) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     const data = JSON.parse(xhr.responseText);
//     // xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             console.log(data);
//             // console.log(data.id);
//         }
//     }
//     xhr.send();

// };
// usersId.forEach((userId, index) => {
//     serverRequest(url + userId, index);
// });

// PROMISES
const urlEasy = 'https://easycode-js.herokuapp.com/test/users';
fetch(urlEasy).then(data => console.log(data.json()));
localStorage.setItem('Hello', 'name');
// localstorage.getItem();