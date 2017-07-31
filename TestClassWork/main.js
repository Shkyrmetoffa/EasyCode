// alert('privet');
// CLASS WORK 20
// const url = 'https://easycode-js.herokuapp.com/';
// let button = document.getElementById('button');
// let main = document.querySelector('.main');

//запрос на сервер
// const serverRequest = (url, requestType, callback) => {
//     let xhr = new XMLHttpRequest();
//     xhr.addEventListener('readystatechange', () => {
//         if (xhr.readyState === 4 && xhr.DONE === 4) {
//             return callback(xhr.responseText);
//         }
//     });
//     xhr.open(requestType, url, true);
//     xhr.send();
// };
// запрос срабатывает по событию нажатия на кнопку
// button.addEventListener('click', () => {
//     serverRequest(url + 'janeShky', 'GET', data => {
//         main.innerHTML += data;
//     });
// });

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    let xhrPOST = new XMLHttpRequest();
    xhrPOST.addEventListener('readystatechange', () => {
        if (xhrPOST.readyState === 4) {
            console.log('response', JSON.parse(xhrPOST.response));
            console.log(xhrPOST.statusText);
        }
    });
    xhrPOST.open('POST', url + 'janeShky/' + 'users');

    // добавляем заголовок
    xhrPOST.setRequestHeader('Content-Type', 'application/json');
    const newUser = {
        fullName: 'Shkurmetova Jane',
        email: 'jjjjane@gmail.com',
        phone: '9994400',
    };
    xhrPOST.send(JSON.stringify(newUser));
});


// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//         console.log(xhr.responseText);
//     }
//то что хотим запросить
// xhr.open('GET', url + 'test', true);
// отправка запроса
// xhr.send();

//Form 
myForm.addEventListener('submit', e => {
    e.preventDefault();

    const { name, email } = myForm.elements;
    if (!name.value) {
        alert('please, add your name');
    }
    if (!email.value) {
        alert('please, add your email');
    }
})