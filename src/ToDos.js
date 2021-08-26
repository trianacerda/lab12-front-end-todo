import React, { Component } from 'react';
import { getToDos, createToDos, updateToDos } from './fetch-utils';

class ToDos extends Component {
    state = { todos: [], };
    componentDidMount = async() => {
        this.fetchToDos();
    };

    fetchToDos = async () =>{
        const data = await getToDos(this.props.token);
        this.setState({ todos:data})
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        await createToDos(this.props.token, {
            todo: this.state.newTodo,
            completed:false,
        });
        this.setState({ newTodo: ''});
        this.fetchToDos();
    }

    handleChecked = async (todo) => {
       todo.completed = !todo.completed;
       await updateToDos(this.props.token, todo);
       this.fetchTodos(); 
    }
    render() { 
        return ( 
        <>
            <h1>
                ToDos List
            </h1>
            {this.state.todos.map((item)=>(
            <div className='todo-item' key={item.id}>
                <input
                type='checkbox' 
                checked={item.completed} 
                onChange={() =>this.handleChecked(item)}>
                </input>

                <label>{item.todo}</label>
            </div>
            ))}
            <div className='new-todo'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.newTodo}
                        type='text'
                        onChange={(e) =>
                        this.setState({ newTodo: e.target.value })}
                    />
                    <button>New To-Do</button> 
                </form>
            </div>
            
      </>
    )}; 

}
 
export default ToDos;