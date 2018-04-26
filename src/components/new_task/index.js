import React from "react";

class NewTask extends React.Component {
    addNewTask(node) {}

    render() {
        return this.props.users ? (
            <div style={{ margin: 10, clear: "both" }}>
                <hr />
                <input name="completed" type="checkbox" />
                <textarea
                    ref={node => {
                        this.addNewTask(node);
                    }}
                />
                <select
                    name="userId"
                    // value={this.props.task.userId}
                    // onChange={event => this.updateTask(event)}
                >
                    {this.props.users.map(user => (
                        <option defaultValue="" value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <button onClick={event => this.addNewTask(event)}>
                    Add new task!
                </button>
            </div>
        ) : (
            <p />
        );
    }
}

export default NewTask;
