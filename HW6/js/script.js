//Task 1

let randomString = 'aaa b a w c ';

let user = {
    name: 'Albina',
};

let javaScript = {
    html: 'JavaScript',
};

function countLetterA(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            counter++;
        }
    }
    return counter;
}
console.log(countLetterA(randomString));
console.log(countLetterA(user.name + javaScript.html));
/*
 *
 * TASK 2
 * Вам дано предложение, вам необходимо перевернуть каждое слово
 * в предложении в обратном порядке
 *
 * */

function reverseEachWord(string) {
    let newArr = [];
    let newStr = string.split(' ');
    newStr.forEach(function(element, i) {
        let revInd = newStr[i].split('').reverse();
        let newRev = revInd.join('');
        newArr.push(newRev);
    });
    return newArr.join(' ');
}

console.log(
    reverseEachWord(
        "You don't have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM"
    )
);
//uoY t'nod evah ot od gnihtyna laiceps ot nigeb gnisu eht .MOD tnereffiD sresworb evah tnereffid snoitatnemelpmi fo eht MOD

console.log(
    reverseEachWord(
        'The Document Object Model (DOM) is a programming interface for HTML and XML documents'
    )
);
// ehT tnemucoD tcejbO ledoM )MOD( si a gnimmargorp ecafretni rof LMTH dna LMX stnemucod

/* TASK 3
 * Добавьте в функцию reverseEachWord второй параметр,
 * данный параметр булево, если true - тогда предложение так же 
 * переворачиваются в обратном порядке
 * */
function reverseEachWord(string, boolean) {
    let newArr = [];
    let newStr = string.split(' ');
    if (boolean == true) {
        newStr.forEach(function(element, i) {
            let revInd = newStr[i].split('').reverse();
            let newRev = revInd.join('');
            newArr.push(newRev);
        });
        return newArr.join(' ');
    } else {
        return string;
    }
}

console.log(
    reverseEachWord(
        "You don't have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM",
        true
    )
);
//MOD eht fo snoitatnemelpmi tnereffid evah sresworb tnereffiD .MOD eht gnisu nigeb ot laiceps gnihtyna od ot evah t'nod uoY
console.log(
    reverseEachWord(
        'The Document Object Model (DOM) is a programming interface for HTML and XML documents',
        true
    )
);
//stnemucod LMX dna LMTH rof ecafretni gnimmargorp a si )MOD( ledoM tcejbO tnemucoD ehT

console.log(reverseEachWord('Hi my Name is', false));
//iH ym emaN si

/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойства 
 * это повторяющиеся слово,
 * а значение это количество повторений
 * */

//Both - Java - and - Java - Script - is - programming - and - programming - OOPBased
function wordCounter(sentence) {
    let obj = {};
    sentence.split(' ').forEach(function(elem) {
        if (obj[elem] !== undefined) {
            obj[elem] += 1;
        } else {
            obj[elem] = 1;
        }
    });

    return obj;
}
console.log(
    wordCounter(
        'Both Java and Java Script is programming and programming OOPBased Language'
    )
);
/*
 {
 Both:1,
 Java:2,
 and:2,
 Script: 1,
 is: 1
 programming: 2
 OOPBased:1,
 Language:1
 }
 */

console.log(wordCounter('asd qwe asd'));
/*
 {
 asd:2
 qwe:1
 }
 * */

console.log(wordCounter('url http url www url http'));

/*
 {
 http:2,
 url:3,
 www:1
 }
 * */
/*
 * TASK 4
 
 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company
 
 */

// function createHashTags(arr) {

// }
let listOfCompanys = [{
        company: 'ASIMILINE',
        name: {
            last: 'Watkins',
            first: 'Lindsay',
        },
        eyeColor: 'brown',
        age: 20,
        picture: 'http://placehold.it/32x32',
        balance: '$1,091.09',
        isActive: true,
        guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
        index: 0,
        _id: '584babb6eeb4137cf14c37a3',
    },
    {
        company: 'ENJOLA',
        name: {
            last: 'Price',
            first: 'Greene',
        },
        eyeColor: 'brown',
        age: 39,
        picture: 'http://placehold.it/32x32',
        balance: '$3,533.55',
        isActive: true,
        guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
        index: 1,
        _id: '584babb6c7be9c2398ed263f',
    },
    {
        company: 'ZINCA',
        name: {
            last: 'Robertson',
            first: 'Barbara',
        },
        eyeColor: 'brown',
        age: 22,
        picture: 'http://placehold.it/32x32',
        balance: '$1,395.22',
        isActive: false,
        guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
        index: 2,
        _id: '584babb6cca4dbefa6001820',
    },
    {
        company: 'TALKOLA',
        name: {
            last: 'Cooke',
            first: 'Lea',
        },
        eyeColor: 'blue',
        age: 31,
        picture: 'http://placehold.it/32x32',
        balance: '$3,074.16',
        isActive: false,
        guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
        index: 3,
        _id: '584babb6391a2b568f1e9416',
    },
    {
        company: 'GEEKKO',
        name: {
            last: 'Webb',
            first: 'Kline',
        },
        eyeColor: 'blue',
        age: 34,
        picture: 'http://placehold.it/32x32',
        balance: '$1,520.21',
        isActive: false,
        guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
        index: 4,
        _id: '584babb66d6ea73e8ed51208',
    },
];

function createHashTags(arr) {
    let obj = {};
    arr.forEach(function(elem) {
        obj[elem._id] = elem.company;
    });
    return obj;
}
console.log(createHashTags(listOfCompanys));
// console.log(createHashTags);
//{"584babb6eeb4137cf14c37a3":"ASIMILINE", 584babb6eeb4137cf14c37a3:'Company2', }

// @ SUPER
/*
 *
 * TASK 1
 * Выведите уникальные значения
 *
 * */

function uniqueElements(arr) {
    let newArr = Array.from(new Set(arr));
    return newArr;
    // return [...new Set(arr)]; Второй способ
}
// а вообще это можно сделать фильтром по indexOf сравнивать с i Выводить те, которые равны
let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
console.log(uniqueElements([1, 1, 2, 3, 3])); // 1,2,3