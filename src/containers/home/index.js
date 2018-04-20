import React from "react";
import Tasks from '../../components/tasks';
import Users from '../../components/users'

class Home extends React.Component {
    render() {
        return (
            <div> 
                <Tasks />
                <Users />
            </div>
        ) 
    }    
}

export default Home;
