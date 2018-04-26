import React from "react";
import Tasks from "../../components/tasks";
import Users from "../../components/users";
import NewTask from "../../components/new_task";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
            showComponent: true
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Users users={this.props.users} />
                <NewTask users={this.props.users} />
                <Tasks
                    users={this.props.users}
                    todos={this.props.todos}
                    handleChange={this.props.handleChange}
                />
                <Footer />
            </div>
        );
    }
}

export default Home;
