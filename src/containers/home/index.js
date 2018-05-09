import React from "react";
import Tasks from "../../components/tasks";
import Users from "../../components/users";
import NewTask from "../../components/new_task";
import Header from "../../components/header";
import Footer from "../../components/footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header signout={this.props.signout} />
                <Users
                    users={this.props.users}
                    todos={this.props.todos}
                    signout={this.props.signout}
                />
                <div className="tasks-container">
                    <NewTask
                        users={this.props.users}
                        addNewTask={this.props.addNewTask}
                    />
                    <Tasks
                        users={this.props.users}
                        todos={this.props.todos}
                        handleChange={this.props.handleChange}
                        deleteTodo={this.props.deleteTodo}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
