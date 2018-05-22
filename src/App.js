import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
// import TodoList from './components/TodoList';
// import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:[],
      todos: []
    }
    this.counter = 0;
    this.itemClick = this.itemClick.bind(this);
    this.addTodoSubmit = this.addTodoSubmit.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  // 添加todo
  addTodoSubmit(text){
    const item = {
      index: this.counter++,
      text: text,
      completed: false,
      onClick: this.itemClick
    }
    const list  = this.state.list.concat([item]);
    this.setState({
      list,
      todos:list
    });
  }

  // 单项click事件
  itemClick(index){
    console.log(index);
    const oldlist  = this.state.list;
    oldlist[index].completed = !oldlist[index].completed;
    this.setState({list:oldlist,todos:oldlist});
  }
  filterList(type){
    const todos = this.state.list;
    let newTodos = [];

    switch (type) {
      case 'SHOW_ALL':
        newTodos = todos;
        // console.log("all");
        break;
      case 'SHOW_COMPLETED':
        newTodos = todos.filter(t => t.completed);
        // console.log("completed");
        break;
      case 'SHOW_ACTIVE':
        newTodos = todos.filter(t => !t.completed);
        // console.log("active");
        break;
    }
    console.log(newTodos);
    this.setState({
      todos: newTodos
    });

  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodoSubmit={this.addTodoSubmit}/>
        <TodoList {...this.state}/>
        <Footer filterList={this.filterList} />
      </div>
    );
  }
}

export default App;
