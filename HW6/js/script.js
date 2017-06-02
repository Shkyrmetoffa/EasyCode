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

function wordCounter(sentence) {}
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

//console.log(wordCounter('asd qwe asd'));
/*
 {
 asd:2
 qwe:1
 }
 * */

//console.log(wordCounter('url http url www url http'));

/*
 {
 http:2,
 url:3,
 www:1
 }
 * */

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
}

let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
console.log(uniqueElements([1, 1, 2, 3, 3])); // 1,2,3