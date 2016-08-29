import React from 'react';
import './index.scss';
import Logo from '../../static/image/logo.png'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h5>关于</h5>
                <img width="60" src="http://imglf2.ph.126.net/WANxTd26h7W0hcGZL0gBwQ==/6630679638096536258.jpg" />
                <div style={{ color:'#FFFFFF',  marginBottom: 10 }} className="bg-green wrapper"><i className="fa fa-keyboard-o"></i> hi,I
                    am Jalon!
                </div>
                work for:
                <img width="40" style={{ color:'#FFFFFF' }} className="bg-green wrapper" src={Logo}/>
            </div>
        )
    }
}
