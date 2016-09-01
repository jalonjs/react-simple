import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Demo from './components/Demo'
import About from './components/About'
import 'font-awesome/css/font-awesome.css'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="demo" component={Demo}>
                <IndexRedirect to="/demo/demo1"/>
                <Route path="/demo/:name" component={Demo}/>
            </Route>
            <Route path="about" component={About}/>
        </Route>
    </Router>
    , document.getElementById('root'));