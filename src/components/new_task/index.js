import React from "react";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            userId: "",
            completed: false
        }
    }

    handleChangeTitle = event => {
        this.setState({title: event.target.value})
    }

    handleChangeUser = event => {
        this.setState({userId: event.target.value})
    }

    render() {
        return this.props.users ? (
            <div style={{ margin: 10, clear: "both" }}>
                <hr />
                <form onSubmit={this.props.addNewTask}>
                    <input
                        name="completed" 
                        type="checkbox" 
                    />
                    <textarea
                        name="title"
                        // ref={text => (this.title = text)}
                        required
                        onChange={this.handleChangeTitle}
                    />
                    <select 
                        name="userId"
                        required
                        onChange={this.handleChangeUser}
                    >
                        <option/>
                        {/* <option disabled selected value> -- select a user -- </option> */}
                        {this.props.users.map(user => (
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))}
                        
                        {/* ref={user => (this.userId = user.id)} */}
                    </select>
                    <button type="submit">
                        Add new task!
                    </button>
                </form>
            </div>
        ) : (
            null
        );
    }
}

export default NewTask;
