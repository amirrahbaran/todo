import React, { Component } from "react";
import FilterLink from "../sections/FilterLink";
import { FilteringTypes } from "../lib/Filter";

class TodoFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <FilterLink todoStore={this.props.todoStore} type={FilteringTypes.DISPLAY_ALL} />
        <FilterLink todoStore={this.props.todoStore} type={FilteringTypes.DISPLAY_LEFT} />
        <FilterLink todoStore={this.props.todoStore} type={FilteringTypes.DISPLAY_DONE} />
      </ul>
    );
  }
}

export default TodoFilter;
