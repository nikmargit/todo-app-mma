import React from "react";
import Task from '../task';

class Tasks extends React.Component {
    
    constructor(props) {
            super(props);
            this.state = {
                todos: []
            }
    }

    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({todos: data});
            });
    }

    render() {
        return (
            <div>
                <h1>Tasks!!!</h1>
                <button>Add new task!</button>
                <hr/>
                {
                    this.state.todos.map(
                        todo => 
                            <Task title={todo.title} id={todo.id} userId={todo.userId} />
                    )
                }
            </div>
        )     
    }
}

export default Tasks;