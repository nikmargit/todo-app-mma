import React from "react";
import User from "../user";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ users: data });
            });
    }

    render() {
        return (
            <div>
                <h1>Users!!!</h1>
                {this.state.users ? (
                    this.state.users.map(user => (
                        <User user={user} key={user.id} />
                    ))
                ) : (
                    <p />
                )}
            </div>
        );
    }
}

export default Users;
