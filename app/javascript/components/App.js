import React from 'react'
import TodoContainer from './TodoContainer';

class App extends React.Component {
    render () {
        return ( 
            <div className="app container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
                    <a className="navbar-brand" href="#">Todos on <span className="text-primary">Rails</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-navbar" aria-controls="app-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="app-navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fas fa-plus mr-2" aria-hidden="true"></span>Add todo
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        </form>
                    </div>
                </nav>

                <TodoContainer />

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
                                <div class="form-group">
                                    <label for="title_edit">Title</label>
                                    <input type="email" class="form-control" id="title-edit"/>
                                </div>
                                <div class="form-group">
                                    <label for="body_edit">Body</label>
                                    <textarea class="form-control" id="body-edit" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
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
                            <button type="button" className="btn btn-primary">Continue</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App