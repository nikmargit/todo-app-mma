import React from "react";

class UserProfile extends React.Component {
    _handleKeyDown = event => {
        switch (event.keyCode) {
            case 27:
                this.props.resetId();
                break;
            default:
                break;
        }
    };

    componentWillMount() {
        document.addEventListener("keydown", this._handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown.bind(this));
    }

    render() {
        const user = this.props.users[this.props.id - 1];

        return user ? (
            <div>
                <div className="pop-info">
                    <h1>{user.name}</h1>
                    <p className="pop-company">{user.company.name}</p>
                    <p className="pop-email">Email: {user.email}</p>
                    <p className="pop-user-name">User Name: {user.username}</p>
                    <p className="pop-phone">Phone: {user.phone}</p>
                </div>
                <div className="pop-tasks-container">
                    <p className="pop-tasks">Tasks:</p>
                    <ul>
                        {this.props.todos
                            .filter(
                                todo =>
                                    todo.userId * 1 === user.id &&
                                    todo.completed === false
                            )
                            .map(todo => {
                                return <li key={todo.id}>- {todo.title}</li>;
                            })}
                    </ul>
                </div>
                <button onClick={() => this.props.resetId()}>Back</button>
            </div>
        ) : (
            <p>Sorry, try again later.</p>
        );
    }
}

export default UserProfile;
