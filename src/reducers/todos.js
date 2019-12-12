const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todo_id: action.id,
          text: action.text,
          completed: false,
          selected: false,
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.todo_id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'TOGGLE_TODO_SELECTED':
      return state.map(todo =>
        (todo.todo_id === action.id)
          ? {...todo, selected: true}
          : {...todo, selected: false}
      )
    default:
      return state
  }
}

export default todos
