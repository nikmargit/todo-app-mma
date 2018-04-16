import React from "react";

class Login extends React.Component {
    ADMIN = "admin@xxx.com";
    PASS = "123456";
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
            console.log("in");
        }
        event.preventDefault();
    };

    render() {
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
