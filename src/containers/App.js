import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Login from "./login";
import Home from "./home";

const getLocalStorage = () => {
    const userString = window.localStorage.getItem("user");

    if (!userString) {
        const initialState = { isAuthenticated: false };

        return initialState;
    } else {
        const initialState = JSON.parse(userString);
        return initialState;
    }
};

class App extends Component {
    componentDidMount() {
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
        const todos = [...this.state.todos];
        if (key > todos[todos.length - 1].id) {
            todos.push(updatedTodo);
        }
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === key) {
                todos[i] = updatedTodo;
            }
        }

        this.setState({ todos });
    };

    addNewTask = newTask => {
        //const index = this.state.todos.length;
        newTask.id = this.state.todos[this.state.todos.length - 1].id + 1;
        console.log(newTask);
        this.handleChange(newTask, newTask.id);
    };

    deleteTodo = key => {
        const todos = [...this.state.todos];
        todos.splice(key, 1);
        this.setState({ todos });
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
                            deleteTodo={this.deleteTodo}
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
    deleteTodo,
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
                        deleteTodo={deleteTodo}
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
