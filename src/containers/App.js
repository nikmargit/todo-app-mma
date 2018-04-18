import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Login from "./login";
import Home from "./home";
import UserProfile from "./user-profile";

const getLocalStorage = () => {
    const userString = window.localStorage.getItem("user");

    if (!userString) {
        const initialState = { isAuthenticated: false };
        console.log(initialState);

        return initialState;
    } else {
        const initialState = JSON.parse(userString);
        return initialState;
    }
};

class App extends Component {
    initialState = getLocalStorage();

    state = this.initialState;

    authenticate = () => {
        console.log("hi");

        const user = { isAuthenticated: true };

        // postavljanje localStorage-a kada se korisnik uloguje
        window.localStorage.setItem("user", JSON.stringify(user));

        this.setState(user);
    };

    signout() {
        window.localStorage.removeItem("user");
        this.setState({ isAuthenticated: false });
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/"
                            component={Home}
                            isAuthenticated={this.state.isAuthenticated}
                            signout={this.signout}
                        />
                        <Route
                            exact
                            path="/login"
                            render={props => (
                                <Login
                                    authenticate={this.authenticate}
                                    isAuthenticated={this.state.isAuthenticated}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/user-profile"
                            component={UserProfile}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const PrivateRoute = ({
    component: Component,
    signout,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} signout={signout} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default App;
