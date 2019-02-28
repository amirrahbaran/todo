import React, { Component } from "react";

class FilterLink extends Component {
  render() {
    const isFilteredLink = this.props.type.name === this.props.todoStore.todoFilter;
    const isDefaultLink = this.props.type.default;
    const isLinkSelected = !isFilteredLink && isDefaultLink;
    return (
      <li>
        <a
          href={"#/" + this.props.type.url}
          className={
            isLinkSelected
              ? "selected"
              : ""
          }
        >
          {this.props.type.label}
        </a>{" "}
      </li>
    );
  }
}

export default FilterLink;
