//Previor tasks
// let name = 'Ivan';
// let objName = {};
//
// let obj = function (name) {
//     objName.name = name;
//     console.log(objName);
//     return objName;
// }
// obj(name);
//
// function makeObj() {
//     let newName = objName.name.toUpperCase();
//     console.log(newName);
//     return newName;
// }
// makeObj(obj);
// HW3
let arr = [];

arr[0] = 'gogo';
arr[1] = 'togo';
arr[2] = 'ololo';

function addToArray(arr) {
    arr[arr.length] = 'rrrrr';
    console.log(arr);
}
addToArray(arr);
//2
var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
function simpleObjGenerator(param1, param2, param3) {
    let obj = {};
    obj.argument1 = param1;
    obj.argument2 = param2;
    obj.argument3 = param3;
    console.log(obj);

    obj.argument2 = userNames;
    return obj;
}
simpleObjGenerator('protocol', { url: '22' }, 8000);
simpleObjGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase());


