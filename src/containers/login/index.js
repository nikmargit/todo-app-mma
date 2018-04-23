import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
    ADMIN = "a@x.com";
    PASS = "123";
    state = {
        email: "",
        password: ""
    };

    setCredentials = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    logIn = event => {
        if (
            this.state.email === this.ADMIN &&
            this.state.password === this.PASS
        ) {
            this.props.authenticate();
        }
        event.preventDefault();
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={"/"} />;
        }
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input
                        type="email"
                        name="email"
                        onBlur={this.setCredentials}
                    />
                    <input
                        type="password"
                        name="password"
                        onBlur={this.setCredentials}
                    />
                    <button type="submit" onClick={this.logIn}>
                        Log In
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
