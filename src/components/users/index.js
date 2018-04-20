import React from "react";
 import md5 from "md5";

class Users extends React.Component {
    
    constructor(props) {
            super(props);
            this.state = {
               users: []
            }
    }

    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({users: data});
            });
    }

    render() {
        return (
            <div>
                <h1>Users!!!</h1>
                {
                    this.state.users.map(
                        user => 
                        <div key={user.id} style={{margin: 10, float: 'left'}}>
                            <img src ={'http://www.gravatar.com/avatar/' + md5(user.email) + "?" +"d=monsterid" +"&" + "s=30"} onClick={() => console.log("img click")}/>
                            <p>{user.username}</p>
                        </div>                 
                    )
                }
            </div>
        ) 
        
    }
}

export default Users;