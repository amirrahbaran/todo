import React, { Component } from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoMenu from "./components/TodoMenu";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class App extends Component {
  render() {
    const TodoStore = this.props.TodoStore;

    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry TodoStore={TodoStore} />
        <TodoItems TodoStore={TodoStore} />
        <TodoMenu TodoStore={TodoStore} />
      </div>
    );
  }
}

export default App;
