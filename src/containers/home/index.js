import React from "react";
import Tasks from "../../components/tasks";
import Users from "../../components/users";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Users users={this.props.users} />
                <Tasks
                    users={this.props.users}
                    todos={this.props.todos}
                    handleChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default Home;
