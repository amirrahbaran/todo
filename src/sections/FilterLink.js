import React, { Component } from "react";

class FilterLink extends Component {
  render() {
    const isFilteredLink =
      this.props.type.name === this.props.TodoStore.todoFilter;
    const isDefaultLink = this.props.type.default;
    const isLinkSelected = !isFilteredLink && isDefaultLink;
    return (
      <li>
        <a
          href="#"
          className={isLinkSelected ? "selected" : ""}
        >
          {this.props.type.label}
        </a>{" "}
      </li>
    );
  }
}

export default FilterLink;
