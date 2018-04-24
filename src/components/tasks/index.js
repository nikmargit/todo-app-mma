import React from "react";
import Task from "../task";

class Tasks extends React.Component {
    render() {
        return this.props.todos ? (
            <div>
                <h1>Tasks!!!</h1>
                <button>Add new task!</button>
                <hr />
                {this.props.todos.map(todo => (
                    <Task
                        key={todo.title}
                        title={todo.title}
                        id={todo.id}
                        userId={todo.userId}
                        users={this.props.users}
                        todos={this.props.todos}
                        handleChange={this.props.handleChange}
                    />
                ))}
            </div>
        ) : (
            <p />
        );
    }
}

export default Tasks;
