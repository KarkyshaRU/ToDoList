import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    let newData = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setState(prev => {
      return { tasks: newData };
    });
  }

  getTodosElems() {
    return this.state.tasks.map(todo => (
      <TodoItem
        key={todo.id}
        idTask={todo.id}
        handleChange={this.handleChange}
        text={todo.text}
        completed={todo.completed}
      />
    ));
  }

  render() {
    return <div className="todo-list">{this.getTodosElems()}</div>;
  }
}

export default App;
