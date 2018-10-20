import React from 'react'
import TodoContainer from './TodoContainer';

class App extends React.Component {
    render () {
        return ( 
            <div className="app">
                <header className="app-header">
                    <h1 className="app-title">Todos on Rails (and React)</h1>
                </header>
                <TodoContainer />
            </div>
        )
    }
}

export default App