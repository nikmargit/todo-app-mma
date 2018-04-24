import React from "react";
import User from "../user";

import { withRouter } from "react-router-dom";

class Users extends React.Component {
    userProfile = id => {
        return this.props.history.push({
            pathname: "/user-profile",
            state: {
                users: this.props.users,
                id: id
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Users!!!</h1>
                {this.props.users ? (
                    this.props.users.map(user => (
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
