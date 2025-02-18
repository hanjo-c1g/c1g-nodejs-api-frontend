/**
 * Model: Verwaltung der To-Do-Daten
 */
class TodoModel {
    constructor() {
        this.todos = [];
    }

    /**
     * Holt alle Todos von der API.
     * @returns {Promise<void>}
     */
    async fetchTodos() {
        try {
            // TODO: Implementiere die Logik für das Laden der Todos von der API
            const response = await fetch('http://localhost:3000/todos');
            if (!response.ok) throw new Error(`Fehler beim Abrufen der Todos: ${response.status} ${response.statusText}`);
            this.todos = await response.json();
        } catch (error) {
            console.error('API Fehler:', error);
            throw new Error(error.message);
        }
    }

    /**
     * Fügt ein neues Todo zur API hinzu.
     * @param {string} title - Der Titel des Todos.
     * @returns {Promise<Object>}
     */
    async addTodo(title) {
        try {
            // TODO: Implementiere die Logik für das Hinzufügen eines neuen Todos zur API
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, done: false })
            });
            if (!response.ok) throw new Error(`Fehler beim Hinzufügen eines Todos: ${response.status} ${response.statusText}`);
            return response.json();
        } catch (error) {
            console.error('API Fehler:', error);
            throw new Error(error.message);
        }
    }

    /**
     * Löscht ein Todo anhand der ID.
     * @param {number} id - Die ID des zu löschenden Todos.
     * @returns {Promise<void>}
     */
    async deleteTodo(id) {
        try {
            // TODO: Implementiere die Logik für das Löschen eines Todos anhand der ID
            const response = await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(`Fehler beim Löschen des Todos: ${response.status} ${response.statusText}`);
        } catch (error) {
            console.error('API Fehler:', error);
            throw new Error(error.message);
        }
    }

    /**
     * Aktualisiert den Status eines Todos (erledigt/nicht erledigt).
     * @param {number} id - Die ID des Todos.
     * @param {boolean} done - Der neue Status des Todos.
     * @returns {Promise<void>}
     */
    async toggleTodo(id, done) {
        try {
            // TODO: Implementiere die Logik für das Aktualisieren des Status eines Todos (erledigt/nicht erledigt)
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ done })
            });
            if (!response.ok) throw new Error(`Fehler beim Aktualisieren des Todos: ${response.status} ${response.statusText}`);
        } catch (error) {
            console.error('API Fehler:', error);
            throw new Error(error.message);
        }
    }
}