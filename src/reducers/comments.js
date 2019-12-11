const comments = (state = [], action) => {
  console.log("state: ", state);

    switch (action.type) {
      case 'ADD_COMMENT':
        return [
          ...state,
          {
            comment_id: action.id,
            id_todo: state.todo_id,
            text: action.text
          }
        ]
      default:
        return state
    }
  }
  
  export default comments
  