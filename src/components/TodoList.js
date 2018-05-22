import React,{ Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render(){
    const { todos } = this.props;
    return (
      <ul className="todosWrap">
        {
          todos.map((todo, index) => (
            <Todo key={index}  {...todo} />
          ))
        }
      </ul>
    );
  }
}

export default TodoList;
