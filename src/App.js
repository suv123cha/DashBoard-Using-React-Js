import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./assets/css/simple-sidebar.css";
import Mainnavbar from "./Components/mainNavBar";

class App extends Component 
{
	render() 
	{
    	return (
    		<div className="App">		
				<Mainnavbar />
    		</div>
    	);
  	}
}

export default App;
