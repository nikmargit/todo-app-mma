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
    componentDidMount() {
        console.log("app mounted!!!!");
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });

        const url1 = `https://jsonplaceholder.typicode.com/todos`;
        fetch(url1)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ todos: data });
            });
    }

    initialState = getLocalStorage();

    state = this.initialState;

    authenticate = () => {
        const user = { isAuthenticated: true };

        // postavljanje localStorage-a kada se korisnik uloguje
        window.localStorage.setItem("user", JSON.stringify(user));

        this.setState(user);
    };

    signout = () => {
        window.localStorage.removeItem("user");
        this.setState({ isAuthenticated: false });
    };

    handleChange = (updatedTodo, key) => {
        console.log(updatedTodo);

        const todos = [...this.state.todos];
        todos[key] = updatedTodo;
        //console.log(todos);

        this.setState({ todos });
    };

    addNewTask = event => {
        console.log("addNewTask from app");
        event.preventDefault();
    };


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
                            users={this.state.users}
                            todos={this.state.todos}
                            handleChange={this.handleChange}
                            addNewTask={this.addNewTask}
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
    users,
    todos,
    handleChange,
    addNewTask,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component
                        {...props}
                        signout={signout}
                        users={users}
                        todos={todos}
                        handleChange={handleChange}
                        addNewTask={addNewTask}
                    />
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
