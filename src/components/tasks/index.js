import React from "react";

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
                            <div key={todo.title}>
                                <input type="checkbox"/>
                                <p>{todo.title}</p>
                                <button>Edit task!</button>
                                <select>
                                    <option key={todo.id}>{todo.userId}</option>
                                </select>
                                <hr/>
                            </div>
                    )
                }
            </div>
        ) 
        
    }
}

export default Tasks;