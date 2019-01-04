import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css";
import "./assets/css/simple-sidebar.css";

import Highlight from "./Components/Hightlight";
import Activity from "./Components/Activity";
import Global from "./Components/Global";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
            <div class="container-fluid bg-dark" style={{height: "60px"}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark px-0">
                    <a href="#" class="navbar-brand">
                        <strong className="fontColor">Admin Dashboard</strong>
                    </a>
                    
                    <div class="collapse navbar-collapse offset-md-3 offset-sm-3 small" id="navbarNav">
                        <div class="col text-right padding">
                            
                            <span><i class="fa fa-cogs fa-settings" aria-hidden="true" ></i></span>
                            <span><i class="fa fa-sign-out fa-settings" aria-hidden="true" ></i></span>
                            <span id="userName" className="fontColor">Mr. Chakraborty &nbsp;</span>
                            <span id="userProfilePhoto">
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-round-1.png" class="img-fluid rounded-circle" width="32" height="32" alt="Profile Photo" />
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="wrapper" className="toggled">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li>
                            <strong>
                                <NavLink exact to="/"><i class="fa fa-tachometer" aria-hidden="true"></i> &nbsp; HIGH LIGHTS</NavLink>
                            </strong>
                        </li>
                        <li>
                            <strong>    
                                <NavLink exact to="/Activity"><i class="fa fa-rss" aria-hidden="true"></i> &nbsp; ACTIVITY FEEDS</NavLink>
                            </strong>
                        </li>
                        <li>
                            <strong> 
                                <NavLink exact to="/Global"><i class="fa fa-globe" aria-hidden="true"></i> &nbsp; WORLD MAP</NavLink>
                            </strong>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <Route exact path="/" component={Highlight} />
                    <Route path="/Activity" component={Activity} />
                    <Route path="/Global" component={Global} />
                </div>
            </div>
        </div>
        
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
