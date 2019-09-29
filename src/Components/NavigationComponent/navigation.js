import React, {Component} from 'react';

import{
	Link
}from 'react-router-dom';

class Navigation extends Component {
    render(){
        return (
        <div className='navbar'>
            <header>
            <h1 className="logo">sam-lucas.dev</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/about'>About</Link></li>
                    <li className='nav-item'><Link to='/projects'>Projects</Link></li>
                </ul>
            </nav>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
            </header>
        </div>
        );
    }
}

export default Navigation;