import React, { Component } from 'react';
import './App.css';

import { observer } from 'mobx-react'

@observer
class App extends Component {
  
  createNew (e) {
    // only run when "Enter" key is pressed
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ''
    }
  }

  toggleComplete (todo) {
    todo.complete = !todo.complete
  }

  onChange (e) {
    this.props.store.filter = e.target.value
  }

  render() {
    const { filter, filteredTodos, todos } = this.props.store
    const todoLis = filteredTodos.map(todo => {
      return (
      <li key={todo.id}>
        <input type="checkbox" key={todo.id} value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)} />{todo.value}
      </li>
      )
    })

    return (
      <div className="App">
        <h1>Todos</h1>
        <label>Add Todo:</label>
        <input className="create" onKeyPress={e => this.createNew(e)} />
        <label>Search Todos:</label>
        <input className="filter" value={filter} onChange={e => this.onChange(e)} />
        <ul>{todoLis}</ul>
      </div>
    );
  }
}

export default App;
