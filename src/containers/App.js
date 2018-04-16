import React, { Component } from "react";

import Login from "./login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <Login />
            </div>
        );
    }
}

export default App;
