import React, { Component } from 'react';
import StudentsList from './StudentsList.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentComponent from './StudentComponent.jsx';



class Table extends Component {
    render() {
        return (
            <Router>
            <>
                
                <Switch>
                    <Route path="/" exact component={StudentsList} />
                    <Route path="/students" exact component={StudentsList} />
                    <Route path="/students/:id" component={StudentComponent} />
                </Switch>
            </>
        </Router>
        )
    }
}
export default Table