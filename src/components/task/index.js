import React from "react";

class Task extends React.Component {
    render() {
        return (
            <div key={this.props.title}>
                <input type="checkbox"/>
                <textarea>{this.props.title}</textarea>
                <select>
                    <option key={this.props.id}>{this.props.userId}</option>
                </select>
                <hr/>
            </div>
        )        
    }
}

export default Task;