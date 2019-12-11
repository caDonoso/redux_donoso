const comments = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        console.log("state: ", state);
        return [
          ...state,
          {
            id: action.id,
            id_task: action.id_task,
            text: action.text
          }
        ]
      default:
        return state
    }
  }
  
  export default comments
  