import React, { Component } from "react";
import FilterLink from "../sections/FilterLink";
import { FilteringTypes } from "../lib/Filter";

class TodoFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <FilterLink TodoStore={this.props.TodoStore} type={FilteringTypes.DISPLAY_ALL} />
        <FilterLink TodoStore={this.props.TodoStore} type={FilteringTypes.DISPLAY_LEFT} />
        <FilterLink TodoStore={this.props.TodoStore} type={FilteringTypes.DISPLAY_DONE} />
      </ul>
    );
  }
}

export default TodoFilter;
