const PhoneBook = {
    title: 'Contacts',
    cardTitle: ['Name', 'Last Name', 'Email'],
    footer: ['Contacts', 'Keypad', 'Edit contact', 'User', 'Add user'],
    phoneCards: [{
            name: 'Vasya',
            lastName: 'Petrov',
            email: 'petrov@gmail.com',
        },
        {
            name: 'Vasya',
            lastName: 'Petrov',
            email: 'petrov@gmail.com',
        },
        {
            name: 'Sergey',
            lastName: 'Sergeev',
            email: 'SergeiSergeev@ec.ua',
        },
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'IvanIvanov@ec.ua',
        },
        {
            name: 'Aleksandr',
            lastName: 'Aleksandrov',
            email: 'AlexAlex@ec.ua',
        },
        {
            name: 'Aleksandr',
            lastName: 'Smirnov',
            email: 'AlexSmirnov@ec.ua',
        },
        {
            name: 'Sergey',
            lastName: 'Volkov',
            email: 'VolkovSergey@ec.ua',
        },
        {
            name: 'Mariya',
            lastName: 'Sharapova',
            email: 'MariyaSharapova@ec.ua',
        },
        {
            name: 'Alexandr',
            lastName: 'Vinnik',
            email: 'AlexVinnik@ec.ua',
        },
        {
            name: 'Dariy',
            lastName: 'Smirnov',
            email: 'DariySmirnov@ec.ua',
        },
        {
            name: 'Elena',
            lastName: 'Leshenko',
            email: 'ElenaLeshenko@ec.ua',
        },
        {
            name: 'Olga',
            lastName: 'Novikova',
            email: 'OlgaNovikova@ec.ua',
        },
        {
            name: 'Nata',
            lastName: 'Shemyakina',
            email: 'ShemyakinaN@ec.ua',
        },
        {
            name: 'Anna',
            lastName: 'Dontsova',
            email: 'AnnaDontsova@ec.ua',
        },
        {
            name: 'Vlad',
            lastName: 'Yama',
            email: 'VladYama@ec.ua',
        },
        {
            name: 'Kira',
            lastName: 'Varobyova',
            email: 'Kira1990@ec.ua',
        },
        {
            name: 'Victor',
            lastName: 'Krivenko',
            email: 'ViktorKriv@ec.ua',
        }
    ],
    render() {
        const body = document.body;
        const header = this.createNewTag('header');
        const main = this.createNewTag('main');
        const footer = this.createNewTag('footer');
        const div = this.createDiv();
        const div2 = this.createDiv();
        const div3 = this.createDiv();
        const formDiv = this.createDiv();
        const h2 = this.createNewTag('h2');
        const form = this.createNewTag('form');
        const table = this.createNewTag('table');
        const thead = this.createNewTag('thead');
        const tbody = this.createNewTag('tbody');
        let headTr = this.createTr();
        let nav = this.createNewTag('nav');
        let label = this.createNewTag('label');
        let input = this.createNewTag('input');

        h2.textContent = this.title;
        label.textContent = 'Search';
        label.setAttribute('for', 'search');

        input.id = 'serch';
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'search');

        header.className = 'header';
        div.className = 'container top-radius';
        this.addClassName(div2, 'container');
        this.addClassName(nav, ' main-nav');
        this.addClassName(div3, 'container bottom-radius');
        this.addClassName(table, 'table table-hover contacts');
        this.addClassName(form, 'form-inline search-form');
        this.addClassName(formDiv, 'form-group');
        this.addClassName(label, 'sr-only');
        this.addClassName(input, 'form-control');

        body.appendChild(header);
        body.appendChild(main);
        body.appendChild(footer);
        header.appendChild(div);
        div.appendChild(h2);

        main.appendChild(div2);

        div2.appendChild(form);
        form.appendChild(formDiv);
        form.appendChild(label);
        form.appendChild(input);

        div2.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
        thead.appendChild(headTr);

        footer.appendChild(div3);
        div3.appendChild(nav);

        this.cardTitle.forEach((title, i) => {
            let thName = this.createNewTag('th');
            thName.textContent = title;
            headTr.appendChild(thName);
        });

        this.phoneCards.forEach((card) => {
            const tr = this.createTr();
            let tdName = this.createTd();
            let tdLastName = this.createTd();
            let tdEmail = this.createTd();

            tdName.textContent = card.name;
            tdLastName.textContent = card.lastName;
            tdEmail.textContent = card.email;
            tr.appendChild(tdName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdEmail);
            tbody.appendChild(tr);
        });
        this.footer.forEach(elem => {
            let a = this.createNewTag('a');
            let spanFont = this.createNewTag('span');
            let span = this.createNewTag('span');
            a.appendChild(spanFont);
            a.appendChild(span);
            span.textContent = elem;
            nav.appendChild(a);
            this.addClassName(a, 'tab');
            this.addClassName(spanFont, 'glyphicon glyphicon-user');
            this.addClassName(span, 'tab-text');
            spanFont.setAttribute('aria-hidden', 'true');
        })
    },

    createNewTag(tag) {
        return document.createElement(tag);
    },
    createDiv() {
        return this.createNewTag('div');
    },
    createTr() {
        return this.createNewTag('tr');
    },
    createTd() {
        return this.createNewTag('td');
    },
    addClassName(tag, name) {
        return tag.className = name;
    }
};
PhoneBook.render();