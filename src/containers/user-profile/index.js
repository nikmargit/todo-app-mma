import React from "react";

class UserProfile extends React.Component {

    render() {
        const user = this.props.users[this.props.id - 1];

        return user ? (
            <div>
                <h1>Name: {user.name}</h1>
                <p>Email: {user.email}</p>
                <p>User Name: {user.username}</p>
                <p>Company: {user.company.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Tasks:</p>
                <ul>
                    {
                    this.props.todos
                        .filter(todo => todo.userId === user.id && todo.completed === false)
                        .map(todo => { 
                            return <li key={todo.id}>- {todo.title}</li>;
                        })
                    }
                </ul>
                <button onClick={() => this.props.resetId()}>Back</button>
            </div>
        ) : (
            <p>Sorry, try again later.</p>
        );
    }
}

export default UserProfile;
