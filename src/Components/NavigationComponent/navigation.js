import React, {Component} from 'react';

import{
	Link
}from 'react-router-dom';

class Navigation extends Component {
    render(){
        return (
        <div>
            <nav role="navigation" className="menu">
                <ul className="masthead-inner" role="navigation">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navigation;