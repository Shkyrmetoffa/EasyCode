/*
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов, 
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/
function solution(sentence) {
    let newArr = [];
    if (sentence[0].includes('.') || sentence[0].includes(',')) {
        console.log('expected');
    } else {
        let arr = sentence[0].split(' ');
        let midleValue = parseInt(sentence[0].length / arr.length);
        arr.forEach(elem => {
            if (elem.length >= midleValue) {
                newArr.push(elem);
            }
        })
    }
    console.log(newArr);
}
solution(["This is a sample string"]);
solution(["Do, do, do, do... do it!"]);
solution(["Some another sample"]);
/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/