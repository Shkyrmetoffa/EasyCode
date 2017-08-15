class View {
    constructor() {
        this.title = 'Ivanov';
        this.header = 'Petr Ivanov';
        this.certificates = [{
                'Common name': 'Sidor Stoyanow',
                'Isuer': 'SKN "Privat"',
                'Valid from': '12.02.2016',
                'Valid till': '02.02.2020'
            },
            {
                'Common name': 'Sergey Sergeev',
                'Isuer': 'SKN "Privat"',
                'Valid from': '12.02.2016',
                'Valid till': '02.02.2020'
            },
            {
                'Common name': 'Ivan Gavrilov',
                'Isuer': 'SKN "Privat"',
                'Valid from': '12.02.2016',
                'Valid till': '02.02.2020'
            },
            {
                'Common name': 'Svetlana Svetlova',
                'Isuer': 'SKN "Privat"',
                'Valid from': '12.02.2016',
                'Valid till': '02.02.2020'
            },
        ]
    }

    createList() {
        return `<div class="list-group">
                    <a class="btn btn-default" title="Go to Добавление сертификата" href="#" role="button">Добавить</a>
                </div>`
    }
    createLink(firstName, title) {
        return `<a href="#" class="list-group-item" title="Go to Просмотр сертификата ${firstName}">${title}</a>`;;
    }
    createTitle() {
        let div = document.querySelector(".list-group");
        let a;
        this.certificates.forEach(elem => {
            let firstName = elem['Common name'].split(' ')[1];
            a = this.createLink(firstName, elem['Common name']);
            return div.append(a);
        });
        console.log(a);
    }
    createDetailsBlock() {
        return `<div class="jumbotron"> Выберите сертификат для просмотра информации
                </div>`
    }

    changeButtonState() {
        let button = document.querySelector(".btn-default");
        let details = document.querySelector(".jumbotron");

        button.addEventListener('click', () => {
            if (button.textContent == 'Добавить') {
                button.textContent = 'Отменить';
                details.style.border = '1px dashed grey';
                details.textContent = 'Перетащите файл сертификата в это поле';
            } else {
                button.textContent = 'Добавить';
                details.style.border = '1px solid grey';
                details.textContent = 'Выберите сертификат для просмотра информации';
            }
        })
    }
    render() {
        let app = document.querySelector('.app');
        // console.log(div);
        app.innerHTML = this.createList() + this.createDetailsBlock();
        this.createTitle();
        this.changeButtonState();
    }
}
let view = new View();
view.render();