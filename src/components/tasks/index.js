import React from "react";
import Task from "../task";

class Tasks extends React.Component {
    render() {
        return this.props.todos ? (
            <div>
                <h1>Tasks!!!</h1>
                <hr />
                {this.props.todos.map((task, index) => (
                    <Task
                        key={task.id}
                        task={task}
                        users={this.props.users}
                        todos={this.props.todos}
                        handleChange={this.props.handleChange}
                        deleteTodo={this.props.deleteTodo}
                        taskIndex={index}
                    />
                ))}
            </div>
        ) : (
            <p />
        );
    }
}

export default Tasks;
