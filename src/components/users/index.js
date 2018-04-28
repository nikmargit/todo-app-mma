import React from "react";
import User from "../user";

import { withRouter } from "react-router-dom";
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
                {this.state.id ? (
                    <div className="popup">
                        <div className="popup_inner">
                            <UserProfile
                                users={this.props.users}
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

export default withRouter(Users);
