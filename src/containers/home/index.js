import React from "react";

class Home extends React.Component {
    
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
                <h1>Home!!!</h1>
                {
                    this.state.todos.map(
                        (todo, index) => 
                            <div key={index}>
                                <p>{todo.title}</p>
                                <input type="checkbox"/>
                                <select>
                                    {
                                        this.state.todos.map(
                                            todo => {
                                               <option key={todo.title}>{todo.userId}</option> 
                                            }
                                        )
                                    }
                                </select>
                            </div>
                    )
                }
            </div>
        ) 
        
    }
}

export default Home;
