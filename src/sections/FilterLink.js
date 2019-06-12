import React, { Component } from "react";
import * as classnames from "classnames";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class FilterLink extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    const filterName = this.props.type.name;
    const filterLabel = this.props.type.label;
    return (
      <li>
      <a
        onClick={() => TodoStore.setFilter(filterName)}
        className={classnames({ selected: TodoStore.filter === filterName })}
      >
        {filterLabel}
      </a>
    </li>
);
  }
}

export default FilterLink;
