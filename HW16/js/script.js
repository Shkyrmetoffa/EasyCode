/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
//  */
function MatrixTransform(arr) {
    let newArr = [];
    (arr.length == 2) ?
    newArr = [
        [],
        [],
        []
    ]: newArr = [
        [],
        []
    ];
    arr.forEach((elem, i, arr) => {
        elem.forEach((val, j, elem) => {
            newArr[j][i] = arr[i][j];
        })
    })
    console.log(newArr);
};
MatrixTransform([
    [1, 3, 5],
    [2, 4, 6]
]);
MatrixTransform([
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
                { name: 'Ноутбуки' }, { name: 'Планшеты' }
            ],
        }, ],
    },
    { name: 'Профиль' },
];

const visualArray = (arr) => {
    let emptyStr = `<ul>`;
    arr.forEach(elem => {
        emptyStr += `<li>`;
        let name = elem.name;
        let children = elem.children;
        if (name) {
            emptyStr += `<h1>${name}</h1>`;
        }
        if (children) {
            emptyStr += visualArray(children);
        }
        emptyStr += `</li>`;
    })
    return emptyStr += `</ul>`;
}
document.body.innerHTML = visualArray(navigation);
// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body
function getMainParent(elem) {
    let newElem = elem.document.parentElement;
    if (newElem !== body) {
        getMainParent(newElem);
    } else {
        return newElem;
    }

}
getMainParent();