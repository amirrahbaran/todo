import React, { Component } from "react";

class TodoEntry extends Component {
  TodoStore = this.props.TodoStore;
  state = {
    value: ""
  };

  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    this.TodoStore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default TodoEntry;
