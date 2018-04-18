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

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
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

export default App;
