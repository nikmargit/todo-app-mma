import React from "react";
import User from "../user";
import UserProfile from "../../containers/user-profile";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            redirect: 0
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
        console.log(id);
        this.setState({ redirect: id });
    };

    render() {
        return this.state.redirect ? (
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to={{
                        pathname: "/user-profile",
                        state: { from: this.props.location }
                    }}
                />
                <Route path="/user-profile" component={UserProfile} />
            </Switch>
        ) : (
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

export default Users;
