import React from "react";
import Footer from "../../components/footer";

class UserProfile extends React.Component {
    state = {
        tasks: [
            {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                completed: false
            },
            {
                userId: 1,
                id: 3,
                title: "fugiat veniam minus",
                completed: false
            },
            {
                userId: 1,
                id: 4,
                title: "et porro tempora",
                completed: true
            },
            {
                userId: 1,
                id: 5,
                title:
                    "laboriosam mollitia et enim quasi adipisci quia provident illum",
                completed: false
            }
        ]
    };

    render() {
        const user = this.props.users[this.props.id - 1];

        return user ? (
            <div>
                <h1>Name: {user.name}</h1>
                <p>Email: {user.email}</p>
                <p>User Name: {user.username}</p>
                <p>Company{user.company.name}</p>
                <p>Phone{user.phone}</p>
                <ul>
                    {this.state.tasks.map(task => {
                        return <li key={task.id}>{task.title}</li>;
                    })}
                </ul>
                <button onClick={() => this.props.resetId()}>Back</button>
                <Footer />
            </div>
        ) : (
            <p>Sorry, try again later.</p>
        );
    }
}

export default UserProfile;
