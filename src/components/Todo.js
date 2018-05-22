import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render(){
    const { completed, text, onClick } = this.props;
    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onClick}
      >
        {text}
      </li>
    );
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


export default Todo;
