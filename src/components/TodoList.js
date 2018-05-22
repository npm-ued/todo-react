import React,{ Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render(){
    const { todos, onTodoClick } = this.props;
    return (
      <ul className="todosWrap">
        {
          todos.map((todo, index) => (
            <Todo key={index}  {...todo} onClick={() => onTodoClick(index)}/>
          ))
        }
      </ul>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
