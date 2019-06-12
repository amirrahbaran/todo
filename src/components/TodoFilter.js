import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import FilterLink from "../sections/FilterLink";
import { FilteringTypes } from "../lib/Filter";

@inject("TodoStore")
@observer
class TodoFilter extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    return (
      <ul className="filters">
        <FilterLink TodoStore={TodoStore} type={FilteringTypes.DISPLAY_ALL} />
        <FilterLink TodoStore={TodoStore} type={FilteringTypes.DISPLAY_LEFT} />
        <FilterLink TodoStore={TodoStore} type={FilteringTypes.DISPLAY_DONE} />
      </ul>
    );
  }
}

export default TodoFilter;
