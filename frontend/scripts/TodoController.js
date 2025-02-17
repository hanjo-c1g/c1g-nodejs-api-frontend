/**
 * Controller: Verknüpfung von Model und View.
 */
class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setDeleteHandler(this.handleDeleteTodo.bind(this));
        this.view.setToggleHandler(this.handleToggleTodo.bind(this));
        this.view.setAddHandler(this.handleAddTodo.bind(this));
        this.init();
    }

    /**
     * Initialisiert die Anwendung und lädt Todos.
     * @returns {Promise<void>}
     */
    async init() {
        try {
            await this.model.fetchTodos();
            this.view.renderTodos(this.model.todos);
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    /**
     * Löscht ein Todo und aktualisiert die Ansicht.
     * @param {number} id - Die ID des zu löschenden Todos.
     * @returns {Promise<void>}
     */
    async handleDeleteTodo(id) {
        try {
            await this.model.deleteTodo(id);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    /**
     * Aktualisiert den Status eines Todos und aktualisiert die Ansicht.
     * @param {number} id - Die ID des Todos.
     * @param {boolean} done - Der neue Status des Todos.
     * @returns {Promise<void>}
     */
    async handleToggleTodo(id, done) {
        try {
            await this.model.toggleTodo(id, done);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    /**
     * Fügt ein neues Todo hinzu und aktualisiert die Ansicht.
     * @param {string} title - Der Titel des neuen Todos.
     * @returns {Promise<void>}
     */
    async handleAddTodo(title) {
        try {
            await this.model.addTodo(title);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }
}