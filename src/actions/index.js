let nextTodoId = 0
let nextCommentId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const addComment = (text, id_todo_selected) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    id_todo: id_todo_selected,
    text
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
