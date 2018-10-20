import React from 'react'
import Moment from 'moment'

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
            <div className="todos-container card-columns">
                {this.state.todos.map( todo => {
                    return (
                        <div className="single-todo card border-primary mb-3" key={todo.id}>
                            <div className="card-header">
                                <h4 className="card-title mb-0">{todo.title}</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{todo.body}</p>
                                <small className="mt-3">From {Moment(todo.created_at).format('d MMM')}</small>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoContainer