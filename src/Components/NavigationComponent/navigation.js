import React, {Component} from 'react';

import{
	Link
}from 'react-router-dom';

class Navigation extends Component {
    render(){
        return (
        <div className='navbar'>
            <nav role="navigation" className="navbar-flexbox">
                <ul className="nav-links" role="navigation">
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/about'>About</Link></li>
                    <li className='nav-item'><Link to='/projects'>Projects</Link></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navigation;