const comments = (state = [], action) => {
  console.log("action: ", action);
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          comment_id: action.id,
          id_todo: action.id_todo,
          edit_mode: false,
          text: action.text
        }
      ]
    case 'EDIT_COMMENT':
      return state.map(comment =>
        (comment.comment_id === action.id)
          ? {...comment, edit_mode: true}
          : {...comment, edit_mode: false}
      )
    case 'UPDATE_COMMENT':
      return state.map(comment =>
        (comment.comment_id === action.id)
          ? {...comment, text: action.text, edit_mode: false}
          : comment
      )
    default:
      return state
  }
}

export default comments
  