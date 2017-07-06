/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
//  */
class MatrixTransform {
    constructor(arr) {
        this.arr = arr;
    }
    changeLength(arr) {
        if (arr.length == 2) {
            let newArr = [
                [],
                [],
                []
            ];
            arr.forEach((elem, i, arr) => {
                elem.forEach((val, j, elem) => {
                    newArr[j][i] = arr[i][j];
                })
            })
            console.log(newArr);
        } else if (arr.length == 3) {
            let newArr = [
                [],
                []
            ];
            arr.forEach((elem, i, arr) => {
                elem.forEach((val, j, elem) => {
                    newArr[j][i] = arr[i][j];
                })
            })
            console.log(newArr);
        } else {
            console.log("It's no matrix");
        }

    }
}
let solution2 = new MatrixTransform();
solution2.changeLength([
    [1, 3, 5],
    [2, 4, 6]
]);
solution2.changeLength([
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
]);
/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
    { name: 'Главная' },
    {
        name: 'Каталог',
        children: [{
            name: 'Компьютеры',
            children: [
                { name: 'Ноутбуки' },
                { name: 'Планшеты' }
            ]
        }]
    },
    { name: 'Профиль' }
];

const visualArray = arr => {
    let emptyStr = `<ul>`;
    arr.forEach((elem, i) => {
        emptyStr += `<li>`;
        if (elem.name) {
            emptyStr += `<h1>${elem.name}</h1>`;
        } else if (elem.children) {
            emptyStr += visualArray(elem.children);
        }
        emptyStr += `</li>`;


        // arr[1].name.insertAdjacentHTML('afterbegin', 'I like js');
    });
    emptyStr += `</ul>`;
    return emptyStr;
    // console.log(emptyStr);
};
visualArray(navigation);