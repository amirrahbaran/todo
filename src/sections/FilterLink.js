import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class FilterLink extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    const isFilteredLink = this.props.type.name === TodoStore.todoFilter;
    const isDefaultLink = this.props.type.default;
    const isLinkSelected = !isFilteredLink && isDefaultLink;
    return (
      <li>
        <a
          href="#"
          className={isLinkSelected ? "selected" : ""}
          onClick={() => TodoStore.todoFilterType("all")}
        >
          {this.props.type.label}
        </a>{" "}
      </li>
    );
  }
}

export default FilterLink;
