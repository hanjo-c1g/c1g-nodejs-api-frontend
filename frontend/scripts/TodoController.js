class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setDeleteHandler(this.handleDeleteTodo.bind(this));
        this.view.setToggleHandler(this.handleToggleTodo.bind(this));
        this.view.setAddHandler(this.handleAddTodo.bind(this));
        this.init();
    }

    async init() {
        try {
            await this.model.fetchTodos();
            this.view.renderTodos(this.model.todos);
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    async handleDeleteTodo(id) {
        try {
            await this.model.deleteTodo(id);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    async handleToggleTodo(id, done) {
        try {
            await this.model.toggleTodo(id, done);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }

    async handleAddTodo(title) {
        try {
            await this.model.addTodo(title);
            await this.init();
        } catch (error) {
            this.view.displayError(error.message);
        }
    }
}