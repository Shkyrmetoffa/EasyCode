class View {
    constructor() {
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
        return `<div class="col-lg-4 col-md-4">
                    <div class="list-group"></div>
                     <a class="btn btn-default" title="Go to Добавление сертификата" href="#" role="button">Добавить</a>
                  </div>`
    }
    createLink(firstName, title) {
        return `<a href="#" class="list-group-item" title="Go to Просмотр сертификата ${firstName}">${title}</a>`;
    }
    createTitle() {
        let div = document.querySelector(".list-group");
        this.certificates.forEach(elem => {
            let firstName = elem['Common name'].split(' ')[1];
            let a = this.createLink(firstName, elem['Common name']);
            div.innerHTML = div.innerHTML + a;
        });

    }
    createDetailsBlock() {
        return `<div class="col-lg-4 col-md-4">
        <div class="jumbotron"> Выберите сертификат для просмотра информации
                </div>
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
    checkedClick(e) {
        let elem = document.querySelector(".pull-right");
        e.target.innerHTML += `<i class="glyphicon glyphicon-triangle-right pull-right"></i>`;
        if (elem) {
            elem.remove();
        }
    }
    showDetails() {
        let details = document.querySelector(".jumbotron");

        console.log(details);
    }
    clickTitle() {
        let listGroup = document.querySelector(".list-group");
        listGroup.addEventListener('click', (e) => {
            if (e.target.tagName == "A") {
                this.checkedClick(e);
                this.showDetails();
            };
        })
    }
    render() {
        let app = document.querySelector('.row');
        app.innerHTML = this.createList() + this.createDetailsBlock();
        this.createTitle();
        this.clickTitle();
        this.changeButtonState();
    }
}
let view = new View();
view.render();