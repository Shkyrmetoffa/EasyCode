/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] 
 * лидеры 17, 5 и 2.
 * */
let solution = arr => {
    let value = Math.max(...arr);
    let finalArr = [];
    let newArr = [];
    finalArr.push(value);
    finalArr.concat(value);
    arr.forEach((element, i) => {
        if (element == value) {
            newArr = arr.slice(i + 1);
        }
    });
    if (newArr.length !== 0) {
        solution(newArr);
    }
    console.log(finalArr);
};
solution([16, 17, 4, 3, 5, 2]); // === [17, 5, 2]
// solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
// solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
// solution([1, 2, 3, 4, 5, 4]); // [5, 4]

/* Task 1
 Сделайте карусель.
* При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
*
*
* Сделайте слайдер - бесконечным, после третьего изображения снова первое.
* Добавьте внизу цифры с текущим активным изображением.
*/
class Slider {
    constructor() {
        let slides = document.querySelectorAll('li');
        let currentSlide = 0;
        let right = document.getElementById('right');
        let left = document.getElementById('left');
    }

    goToSlide(n) {
        this.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (n + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide showing';
    }
    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    previousSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    render() {
        this.right.onclick = function() {
            // console.log(this);
            this.nextSlide();
        }
        this.left.onclick = function() {
            this.previousSlide();
        }
    }
}
let slider = new Slider();
slider.render();