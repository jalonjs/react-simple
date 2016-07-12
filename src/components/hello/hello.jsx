import React from 'react';
import './hello.scss';
import Logo from '../../static/image/logo.png'


export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <img src={ Logo }/>
                <div style={{ color:'#FFFFFF' }} className="bg-green wrapper"><i className="fa fa-keyboard-o"></i> hi,I am Jalon!</div>
            </div>
        )
    }
}
