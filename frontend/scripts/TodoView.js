/**
 * View: Darstellung der UI-Elemente und Interaktion.
 */
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
    
    /**
     * Rendert die Liste der Todos in der UI.
     * @param {Array} todos - Liste der Todos.
     */
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

    /**
     * Zeigt eine Fehlermeldung in der UI an.
     * @param {string} message - Die Fehlermeldung.
     */
    displayError(message) {
        this.errorMessage.textContent = message;
    }

    /**
     * Setzt den Event-Handler für das Löschen eines Todos.
     * @param {Function} handler - Die Callback-Funktion.
     */
    setDeleteHandler(handler) {
        this.onDeleteClick = handler;
    }

    /**
     * Setzt den Event-Handler für das Umschalten eines Todos.
     * @param {Function} handler - Die Callback-Funktion.
     */
    setToggleHandler(handler) {
        this.onToggleClick = handler;
    }

    /**
     * Setzt den Event-Handler für das Hinzufügen eines Todos.
     * @param {Function} handler - Die Callback-Funktion.
     */
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