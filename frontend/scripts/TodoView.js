class TodoView {
    constructor() {
        this.app = document.getElementById('app');
        this.todoList = document.createElement('ul');
        this.input = document.createElement('input');
        this.addButton = document.createElement('button');
        this.addButton.textContent = 'Hinzufügen';
        this.errorMessage = document.createElement('p');
        this.errorMessage.style.color = 'red';
        this.app.append(this.input, this.addButton, this.errorMessage, this.todoList);
    }

    renderTodos(todos) {
        this.todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.done;
            checkbox.onchange = () => this.onToggleClick(todo.id, checkbox.checked);
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.onclick = () => this.onDeleteClick(todo.id);
            
            li.prepend(checkbox);
            li.append(deleteButton);
            this.todoList.append(li);
        });
    }

    displayError(message) {
        this.errorMessage.textContent = message;
    }

    setDeleteHandler(handler) {
        this.onDeleteClick = handler;
    }

    setToggleHandler(handler) {
        this.onToggleClick = handler;
    }

    setAddHandler(handler) {
        this.addButton.onclick = () => {
            const title = this.input.value.trim();
            if (title) {
                handler(title);
                this.input.value = '';
            }
        };
    }
}