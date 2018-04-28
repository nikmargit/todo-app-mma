import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="sticky">
                <p>&copy;  MMA team  {new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;
