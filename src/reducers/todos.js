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
    case 'DELETE_TODO':
      let newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        let element = newState[i];
        if(element.todo_id === action.id){
          newState.splice(i, 1);
        }   
      }
      return newState;
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
