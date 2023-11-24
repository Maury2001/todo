import { useState, Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component{
  state ={
    todos:[]
  };

  componentDidMount(){
    this.getTodos();
  }

  getTodos(){
    axios
     .get('http://127.0.0.1:8000/api/')
     .then(res => {
        this.setState({todos: res.data})
     })
     .catch(err =>{
        console.log(err);
     })

  }

  render(){
    return(

      <div className=' border rounded-3xl p-5'>
        <h1 className=' font-semibold text-4xl text-blue-600'>To Do List</h1>
        {this.state.todos.map(item=>(
          <div  key={item.id}>
            <h1 className=' text-start text-3xl underline p-3'>{item.title}</h1>
            <span className=' font-extralight'>{item.body}</span>
            <hr className=' py-3'/>
            </div>
        ))}
      </div>

    );
  }
}

export default App