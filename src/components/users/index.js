import React from "react";
//import { withRouter } from "react-router-dom";

import User from "../user";
import UserProfile from "../../containers/user-profile";

class Users extends React.Component {
    state = {
        id: 0
    };

    userProfile = id => {
        this.setState({ id: id });
    };

    resetId = () => {
        this.setState({ id: 0 });
    };

    render() {
        return (
            <div className="users">
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
                {this.state.id ? (
                    <div className="popup">
                        <div className="popup_inner">
                            <UserProfile
                                users={this.props.users}
                                todos={this.props.todos}
                                id={this.state.id}
                                resetId={this.resetId}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Users;
