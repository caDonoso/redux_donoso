import { combineReducers } from 'redux'
import todos from './todos'
import comments from './comments'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  comments,
  visibilityFilter
})
