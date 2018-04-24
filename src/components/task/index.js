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
            <div key={this.props.users.id}>
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
                    <option value="1">Leanne Graham</option>
                    <option value="2">Ervin Howell</option>
                    <option value="3">Clementine Bauch</option>
                    <option value="3">Patricia Lebsack</option>
                    <option value="4">Chelsey Dietrich</option>
                    <option value="5">Mrs. Dennis Schulist</option>
                    <option value="6">Kurtis Weissnat</option>
                    <option value="7">Nicholas Runolfsdottir V</option>
                    <option value="8">Ellsworth Summit</option>
                    <option value="9">Glenna Reichert</option>
                    <option value="10">Clementina DuBuque</option>
                    ))}
                </select>
                <hr />
            </div>
        ) : (
            <p />
        );
    }
}

export default Task;
