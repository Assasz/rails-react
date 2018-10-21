import React from 'react'
import Moment from 'moment'

class TodoContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            currentTodo : null
        }

        this.updateTodo = this.updateTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    componentDidMount() {
        fetch('/api/todos.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todos: data }) })
    }

    getValidationOptions() {
        let normalizer = function(value) {
            return $.trim(value)
        }

        return {
            rules: {
                title: {
                    required: true,
                    maxlength: 255,
                    normalizer: normalizer
                },
                body: {
                    required: true,
                    maxlength: 1000,
                    normalizer: normalizer
                },
            },
            onkeyup: false,
            errorClass: "is-invalid",
            validClass: "is-valid",
            errorElement: "div",
            errorPlacement: function(error, element) {
                error.appendTo(element.parent())
            }
        }
    }

    setCurrentTodo(todoId) {
        let todo = this.state.todos.filter(todo => {
            return todo.id === todoId
        })

        this.state.currentTodo = todo[0]
    }

    toggleEditModal(todoId) {
        $('#edit-modal').modal()

        this.setCurrentTodo(todoId)

        $('#edit-form #title').val(this.state.currentTodo.title)
        $('#edit-form #body').val(this.state.currentTodo.body)
    }

    toggleDeleteModal(todoId) {
        $('#delete-modal').modal()

        this.setCurrentTodo(todoId)
    }

    updateTodo() {
        
    }

    deleteTodo() {

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
                                        title="Delete todo"
                                        onClick={this.toggleDeleteModal.bind(this, todo.id)}>
                                        <small className="fas fa-trash-alt" aria-hidden="true"></small>
                                    </button>
                                    <button 
                                        type="button" 
                                        id="edit-btn" 
                                        className="btn btn-link btn-sm ml-2 float-right" 
                                        title="Edit todo"
                                        onClick={this.toggleEditModal.bind(this, todo.id)}>
                                        <small className="fas fa-pen" aria-hidden="true"></small>
                                    </button>
                                </p>
                            </div>
                        </div>
                    )
                })}

                <div className="modal fade" id="edit-modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="edit-form">
                                <div className="form-group">
                                    <label htmlFor="title_edit">Title</label>
                                    <input type="email" className="form-control" id="title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body_edit">Body</label>
                                    <textarea className="form-control" id="body" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.updateTodo}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="delete-modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this todo?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.deleteTodo}>Continue</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoContainer