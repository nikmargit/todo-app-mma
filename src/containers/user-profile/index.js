import React from "react";

class UserProfile extends React.Component {
    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(resp => resp.json())
            .then(function(data) {
                console.log(data);
            });
    }
    render() {
        return <h1>User Profile!!!</h1>;
    }
}

export default UserProfile;
