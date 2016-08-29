import React from 'react';
import {Link} from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div className="content">
                <nav>
                    <Link to="/demo" activeStyle={{color: 'red'}}><i className="fa fa-star-o"></i>Demo</Link>|
                    <Link to="/about" activeStyle={{color: 'red'}}><i className="fa fa-rocket"></i>关于</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
