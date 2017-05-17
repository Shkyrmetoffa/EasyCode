//First task
let numbers = [25, 1];
// let project = 'проект'; I think it is unneeded
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`;
console.log(task1);

//Second task
let array = [
    'Он',
    'был больше ни телом, к которому рано или поздно',
    'он обнаружил',
    'не',
    'Так, когда Будда достиг Просветления',
    '...',
    'что больше',
    'ощущает себя мишенью',
    'не'
];

let homeSentence = `${array[4]}, ${array[2]}, ${array[6]} ${array[8]} ${array[7]}. 
${array[0]} ${array[3]} ${array[1]} ${array[5]}`;

console.log(homeSentence);

//Third task
let myObj = {};
myObj['name'] = 'Vasya';
myObj['last name'] = 'Ivanov';
myObj.age = 23;
myObj.job = 'developer';

console.log(myObj);

//Fourth task
let sliceString = 'Ytube'; //
console.log('You' + sliceString.slice(1)); // YouTube

//Fifth task
let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let frameName = frameworks[1] + Math.floor(frameworks[0]);
let lastElem = frameworks[frameworks.length - 1];
let frameString = `google released new version ${frameName} But real speed is ${lastElem}`;
console.log(frameString);