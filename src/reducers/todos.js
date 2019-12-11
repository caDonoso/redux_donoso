const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          selected: false,
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'TOGGLE_TODO_SELECTED':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, selected: !todo.selected}
          : todo
      )
    default:
      return state
  }
}

export default todos
