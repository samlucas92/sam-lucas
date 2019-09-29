import React, {Component} from 'react';

import{
	Link
}from 'react-router-dom';

class Navigation extends Component {
    render(){
        return (
            <div className="hero">
                <div className="overlay">
                    <div className="hero-text">
                        <h1>Dev react playground</h1>
                        <p>
                            This is a site that I will be using to learn, test and display react apps. Also going to try and learn css flexbox too.
                            Most of the time I'd imagine this will be broken and messy. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;