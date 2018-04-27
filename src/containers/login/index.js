import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {

    ADMIN = "a@x.com";
    PASS = "123";

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        };
    }

    logIn = event => {
        if (
            this.emailInput.value === this.ADMIN &&
            this.passInput.value === this.PASS
        ) {
            this.setState({
                showMessage: false
            });
            this.props.authenticate();      
        } else {
            console.log("wrong");
            this.setState({
                showMessage: true
            });
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
                <form onSubmit={this.logIn}>
                    <input
                        type="email"
                        ref={input => (this.emailInput = input)}
                        required
                    />
                    <input
                        type="password"
                        ref={input => (this.passInput = input)}
                        required
                    />
                    <button type="submit">Log In</button>
                </form>
                {this.state.showMessage && <p>Wrong email or password! Try again!</p>}
            </div>
        );
    }
}

export default Login;
