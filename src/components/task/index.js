import React from "react";

class Task extends React.Component {
    updateTask = event => {
        let updatedTask = {
            ...this.props.task,
            [event.currentTarget.name]:
                event.currentTarget.type === "checkbox"
                    ? event.currentTarget.checked
                    : event.currentTarget.value
        };

        this.props.handleChange(updatedTask, this.props.task.id - 1);
    };

    render() {
        return this.props.users && this.props.todos ? (
            <div
                key={this.props.todos.id}
                style={{ margin: 10, clear: "both" }}
            >
                <input
                    name="completed"
                    type="checkbox"
                    defaultChecked={this.props.task.completed}
                    onChange={event => this.updateTask(event)}
                />
                <textarea
                    name="title"
                    value={this.props.task.title}
                    onChange={event => this.updateTask(event)}
                    disabled={this.props.task.completed}
                />
                <select
                    name="userId"
                    value={this.props.task.userId}
                    onChange={event => this.updateTask(event)}
                >
                    {this.props.users.map(user => (
                        <option value={user.id} key={user.id}>
                            {user.username}
                        </option>
                    ))}
                    ))}
                </select>
                <button
                    onClick={() => this.props.deleteTodo(this.props.taskIndex)}
                >
                    Remove Task
                </button>
                <hr />
            </div>
        ) : (
            <p />
        );
    }
}

export default Task;
