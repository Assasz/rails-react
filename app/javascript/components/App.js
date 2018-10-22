import React from 'react'
import TodoContainer from './TodoContainer';

class App extends React.Component {
    toggleCreateModal(e) {
        e.preventDefault()
        $('#create-modal').modal()
    }

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
                                <a className="nav-link" href="#" onClick={(e) => {this.toggleCreateModal(e)}}>
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
            </div>
        )
    }
}

export default App