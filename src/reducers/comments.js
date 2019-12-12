const comments = (state = [], action) => {
  console.log("action: ", action);
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          comment_id: action.id,
          id_todo: action.id_todo,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default comments
  