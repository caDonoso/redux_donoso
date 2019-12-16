/**
 * Get the id of the Todo enabled that is selected.
 *
 * @param  array  todos
 */
export const getTodoSelected = (todos) => {
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        if(todo.selected && todo.enabled){
            return todo.todo_id;
        }
    }
}