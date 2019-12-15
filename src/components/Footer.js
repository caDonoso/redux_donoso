import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Spring } from 'react-spring/renderprops';

import './App.css';

const Footer = () => (
  <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{ delay: 1000, duration: 1000}}
    >
      { props => (
        <div style={props}>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
              All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
              Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
              Completed
            </FilterLink>
        </div>
    ) }
  </Spring>
)

export default Footer
