import React from "react";
import Tasks from "../../components/tasks";
import Users from "../../components/users";
import NewTask from "../../components/new_task";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false
        };
      }

    addNewTask(event) {
        console.log("add new task!!!");
        this.setState({
            showComponent: true,
          });
    }

    componentDidMount() {
        console.log("home!!!");
    }

    render() {
        return (
            <div>
                <Users users={this.props.users} />
                <NewTask users={this.props.users} />
                <button onClick={(event) => this.addNewTask(event)}>Add new task!</button>
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
