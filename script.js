class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button type="button" class="btn btn-danger btn-small delete">X</button></td>
        `;

        list.appendChild(row);
    }

    static alertMessage(message, classname) {
        const div = document.createElement('div');
        div.className = `alert alert-${classname}`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector("#container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector(".alert").remove(), 3000);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if ( title === '' || author === '' || isbn === '') {
        UI.alertMessage("Please fillup the fields!", "danger");
    } else {

        const book = new Book(title, author, isbn);

        UI.addBookToList(book);
    
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';

        UI.alertMessage("Data inserted sucessfully", "success");
    }

});

document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);
});

