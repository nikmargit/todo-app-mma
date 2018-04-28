import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <span>Hello Admin!</span>
                <button onClick={() => this.props.signout()}>Sign out</button>
            </div>
        );
    }
}

export default Header;
