import React from "react";
import User from "../user";

import { withRouter } from "react-router-dom";

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

    userProfile = id => {
        return this.props.history.push({
            pathname: "/user-profile",
            state: {
                users: this.state.users,
                id: id
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Users!!!</h1>
                {this.state.users ? (
                    this.state.users.map(user => (
                        <User
                            user={user}
                            key={user.id}
                            userProfile={this.userProfile}
                        />
                    ))
                ) : (
                    <p />
                )}
            </div>
        );
    }
}

export default withRouter(Users);
