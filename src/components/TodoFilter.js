import React, { Component } from "react";
import * as classnames from "classnames";
import { inject, observer } from "mobx-react";
// import FilterLink from "../sections/FilterLink";
// import { FilteringTypes } from "../lib/Filter";

@inject("TodoStore")
@observer
class TodoFilter extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    return (
      <ul className="filters">
        <li>
          <button
            onClick={() => TodoStore.updateFilter("all")}
            className={classnames({ active: TodoStore.filter === "all" })}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => TodoStore.updateFilter("active")}
            className={classnames({ active: TodoStore.filter === "active" })}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => TodoStore.updateFilter("completed")}
            className={classnames({ active: TodoStore.filter === "completed" })}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TodoFilter;
