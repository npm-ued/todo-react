import React, { Component } from 'react';

class AddTodo extends Component {
  render(){
    let input;
    const { addTodoSubmit } = this.props;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          const text = input.value.trim();
          if(!text){
            return;
          }
          addTodoSubmit(text);
          input.value = ''; // 清空input
        }}>
          <input type="text" placeholder="请输入todo" ref={node => {
            input = node;
          }}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
