import React, {Component} from 'react';

import{
	Link
}from 'react-router-dom';

class Navigation extends Component {
    render(){
        return (
            <div className="hero-area">
                <div className="hero-name">
                    <h1>Hero Area H1</h1>
                </div>

                <div className="hero-blurb">
                    Blurb - Scroll Down For More
                </div>
                
                <div className="hero-arrow">
                    <div className="down-arrow">
                    *down arrow*
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;