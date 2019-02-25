import React, { Component } from "react";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <header className="header">
          <h1>todo</h1>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </header>
        <section className="main">
          <ul className="todo-list">
            <li>
              <div className="view">
                <input type="checkbox" className="toggle" value="on"/>
                <label>new work</label>
                <button className="destory" />
              </div>
            </li>
            <li className="completed">
              <div className="view">
                <input type="checkbox" className="toggle" value="on" checked={true}/>
                <label>old work</label>
                <button className="destory" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
