import React, { Component } from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoMenu from "./components/TodoMenu";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoMenu />
      </div>
    );
  }
}

export default App;
