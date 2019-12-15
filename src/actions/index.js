let nextTodoId = 0
let nextCommentId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id: id,
})

export const addComment = (text, id_todo_selected) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    id_todo: id_todo_selected,
    text
})

export const editComment = (id_comment) => ({
  type: 'EDIT_COMMENT',
  id: id_comment,
})

export const updateComment = (id_comment, new_text) => ({
  type: 'UPDATE_COMMENT',
  id: id_comment,
  text: new_text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleTodoSelected = id => ({
  type: 'TOGGLE_TODO_SELECTED',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
