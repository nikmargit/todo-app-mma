import React from "react";

class Task extends React.Component {
    render() {
        return this.props.users && this.props.todos ? (
            <div key={this.props.title}>
                <input type="checkbox" />
                <textarea
                    value={this.props.title}
                    onChange={event => this.props.handleChange(event)}
                />
                <select
                    value={this.props.users[this.props.userId - 1].name}
                    selected
                >
                    {this.props.users.map(user => (
                        <option key={user.id}>{user.name}</option>
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
