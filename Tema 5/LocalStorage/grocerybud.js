let groderyList = document.getElementById('groderyList');

let submit = document.getElementById('submit');

let clearItems = document.getElementById('clear');

let input = document.getElementById('grocery');

let form = document.getElementById('form');

let deleteButtons = document.getElementsByClassName('delete');

let editButtons = document.getElementsByClassName('edit');

let listaCompra = [];

window.onload = () => {
    if (localStorage.getItem('listaCompra')) {
        let listaCompraParse = JSON.parse(localStorage.getItem('listaCompra'));
        for(let i = 0; i < listaCompraParse.length; i++) {
            listaCompra.push(listaCompraParse[i]);
        }
        for(let i = 0; i < listaCompra.length; i++) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.innerHTML = listaCompra[i];
            groderyList.appendChild(li);
            li.appendChild(span);
            let deleteButton = document.createElement('button');
            let editButton = document.createElement('button');
            deleteButton.innerHTML = 'X';
            editButton.innerHTML = 'Edit';
            li.appendChild(deleteButton);
            li.appendChild(editButton);

            deleteButton.className = 'delete';
            editButton.className = 'edit';

            for(let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener('click', (e) => {
                    let li = e.target.parentElement;
                    let span = li.firstElementChild;
                    listaCompra.splice(listaCompra.indexOf(span.innerHTML), 1);
                    localStorage.listaCompra = JSON.stringify(listaCompra);
                    li.parentElement.removeChild(li);
                });
            }

            for(let i = 0; i < editButtons.length; i++) {
                editButtons[i].addEventListener('click', (e) => {
                    let userValue = prompt('Enter new value');
                    let li = e.target.parentElement;
                    let span = li.firstElementChild;
                    span.textContent = userValue;
                    listaCompra[listaCompra.indexOf(span.textContent) + 1] = userValue;
                    localStorage.listaCompra = JSON.stringify(listaCompra);
                });
            }
        }
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;
    listaCompra.push(value);
    localStorage.listaCompra = JSON.stringify(listaCompra);
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = value;
    groderyList.appendChild(li);
    li.appendChild(span);
    input.value = '';

    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    editButton.innerHTML = 'Edit';
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    deleteButton.className = 'delete';
    editButton.className = 'edit';

    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            let li = e.target.parentElement;
            let span = li.firstElementChild;
            listaCompra.splice(listaCompra.indexOf(span.innerHTML), 1);
            localStorage.listaCompra = JSON.stringify(listaCompra);
            li.parentElement.removeChild(li);
        });
    }

    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (e) => {
            let userValue = prompt('Enter new value');
            let li = e.target.parentElement;
            let span = li.firstElementChild;
            span.textContent = userValue;
            listaCompra[listaCompra.indexOf(span.textContent) + 1] = userValue;
            localStorage.listaCompra = JSON.stringify(listaCompra);
        });
    }
});


clearItems.addEventListener('click', () => {
    while(groderyList.firstChild) {
        groderyList.removeChild(groderyList.lastChild);
        listaCompra = [];
        localStorage.listaCompra = JSON.stringify(listaCompra);
    }
});