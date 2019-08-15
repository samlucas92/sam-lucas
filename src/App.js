import React, {Component} from 'react';
import{
	BrowserRouter as Router,
	Route
}from 'react-router-dom';

import Navigation from './Components/NavigationComponent/navigation';
import Homepage from './Components/Pages/homepage';

import './App.css';

class App extends Component {
	render(){
		return (
			<Router>
				<div className="app">
					<div className="ie-fix">
						<div className="wrapper">
							<Navigation />
							<Route exact path='/' component={Homepage}/>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;
