let nextTodoId = 0
let nextCommentId = 0

/**
 * Add a Todo.
 *
 * @param  string  text
 */
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

/**
 * Delete a Todo.
 *
 * @param  int  id
 */
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id: id,
})

/**
 * Add a comment to a Todo.
 *
 * @param  string  text
 * @param  int  id_todo_selected
 */
export const addComment = (text, id_todo_selected) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    id_todo: id_todo_selected,
    text
})

/**
 * Open the edit mode for a comment of a Todo.
 *
 * @param  int  id_comment
 */
export const editComment = (id_comment) => ({
  type: 'EDIT_COMMENT',
  id: id_comment,
})

/**
 * Update a comment of a Todo.
 *
 * @param  int  id_comment
 * @param  string  new_text
 */
export const updateComment = (id_comment, new_text) => ({
  type: 'UPDATE_COMMENT',
  id: id_comment,
  text: new_text
})

/**
 * Set the visibility for the filter.
 *
 * @param  string  filter
 */
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

/**
 * Toggle the state 'completed' of a Todo.
 *
 * @param  int id
 */
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})


/**
 * Toggle the state 'selected' of a Todo.
 *
 * @param  int id
 */
export const toggleTodoSelected = id => ({
  type: 'TOGGLE_TODO_SELECTED',
  id
})

/**
 * Types of filters.
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
