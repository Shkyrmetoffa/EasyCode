class Header {
    constructor() {}
    createHeader() {
        let headerTag = `<header class="header">`;
        headerTag += `<div class="container top-radius">
			<h2>Keypad</h2>
		</div>`;
        headerTag += `</header`;
        return headerTag;
    }
    render() {
        let main = document.getElementsByClassName('main')[0];
        main.innerHTML += this.createHeader();
    }
}
let header = new Header();
header.render();

class Main {
    constructor() {}
    createContainer(input, buttons) {
        return `<div class="container">${input}${buttons}</div>`;
    }
    createInput() {
        let input = `<div class="display"><span class="number"></span></div>`
        let buttons = `<div class="keypad-holder>
				<button class="key"></button>
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="clear">X</button>
				<button class="phone"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></span></button>
				<button class="back"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                </div>`;

        ;
        return this.createContainer(input, buttons);
    }
    createFooter() {
        return `<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class="tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab active">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					<span class="tab-text">Keypad</span>
				</a>
				<a href="edit-contact.html" class="tab">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
					<span class="tab-text">Edit contact</span>
				</a>
				<a href="user.html" class="tab">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					<span class="tab-text">User</span>
				</a>
				<a href="add-user.html" class="tab">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					<span class="tab-text">Add user</span>
				</a>
			</nav>
		</div>
	</footer>`;
    }
    click() {
        let buttons = document.getElementsByClassName('key');
        let input = document.querySelector('span');
        for (let i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            button.addEventListener('click', (e) => {
                input.innerHTML += e.target.textContent;
            });
        }
    }
    render() {
        let main = document.getElementsByClassName('main')[0];
        main.innerHTML += this.createInput() + this.createFooter();
        this.click();
    }
}
let main = new Main();
main.render();