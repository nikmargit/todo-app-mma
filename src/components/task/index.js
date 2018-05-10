import React from "react";

class Task extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.task !== this.props.task;
    }

    updateTask = event => {
        let updatedTask = {
            ...this.props.task,
            [event.currentTarget.name]:
                event.currentTarget.type === "checkbox"
                    ? event.currentTarget.checked
                    : event.currentTarget.value
        };

        this.props.handleChange(updatedTask, this.props.task.id);
    };

    render() {
        return this.props.users && this.props.todos ? (
            <div key={this.props.todos.id} className="task">
                <div className="input-checkbox">
                    <input
                        id={this.props.todos.id}
                        name="completed"
                        type="checkbox"
                        defaultChecked={this.props.task.completed}
                        onChange={event => this.updateTask(event)}
                    />
                    <label htmlFor={this.props.todos.id}>Mark completed</label>
                </div>
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
                    X
                </button>
            </div>
        ) : (
            <p />
        );
    }
}

export default Task;
