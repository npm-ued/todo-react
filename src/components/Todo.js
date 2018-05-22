import React,{ Component } from 'react';

class Todo extends Component {
  render(){
    const { completed, text, onClick,index } = this.props;
    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={e=>{onClick(index)}}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
