export const getTodoSelected = (todos) => {
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        if(todo.selected){
            return todo.todo_id;
        }
    }
}