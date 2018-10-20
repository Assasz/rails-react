import React from 'react'
import axios from 'axios';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        fetch('/api/todos.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todos: data }) });
    }

    render() {
        return (
            <div className="todos-container">
                {this.state.todos.map( todo => {
                    return (
                        <div className="single-todo" key={todo.id}>
                            <h4>{todo.title}</h4>
                            <p>{todo.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoContainer