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
                            <div className="card-body">
                                <h4 className="card-title" title={todo.title.length > 60 ? todo.title : ''}>
                                    {(todo.title.length > 60) ? todo.title.slice(0, -(todo.title.length - 60)) + '...' : todo.title}
                                </h4>
                                <p className="card-text">{todo.body}</p>
                                <p className="mb-0">
                                    <small className="mt-3">{Moment(todo.created_at).format('d MMM HH:mm')}</small>
                                    <button 
                                        type="button" 
                                        id="delete-btn" 
                                        className="btn btn-link btn-sm ml-2 float-right" 
                                        title="Delete todo">
                                        <small className="fas fa-trash-alt" aria-hidden="true"></small>
                                    </button>
                                    <button 
                                        type="button" 
                                        id="edit-btn" 
                                        className="btn btn-link btn-sm ml-2 float-right" 
                                        title="Edit todo">
                                        <small className="fas fa-pen" aria-hidden="true"></small>
                                    </button>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoContainer