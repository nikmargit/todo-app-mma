import React from "react";
import md5 from "md5";

class User extends React.Component {
    user = this.props.user;

    render() {
        return (
            <div
                key={this.user.id}
                style={{ margin: 10, float: "left" }}
                onClick={() => this.props.userProfile(this.user.id)}
            >
                <img
                    alt={this.user.email}
                    src={
                        "http://www.gravatar.com/avatar/" +
                        md5(this.user.email) +
                        "?" +
                        "d=monsterid" +
                        "&" +
                        "s=30"
                    }
                />
                <p>{this.user.username}</p>
            </div>
        );
    }
}

export default User;
