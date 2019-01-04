import React, { Component } from 'react';
//import { Link } from "react-router";
import { Router, Route, browserHistory, NavLink } from "react-router-dom";


class Login extends Component
{
   

	render()
	{
		return (
				<div>
                    <div class="container-fluid bg-dark">
                        <nav class="navbar navbar-expand-lg navbar-light bg-dark px-0">
                            <a href="#" class="navbar-brand">
                                <strong className="fontColor">Admin Dashboard</strong>
                            </a>

                            {/* <button class="navbar-toggler p-0 border-0 rounded-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}
                            
                            <div class="collapse navbar-collapse offset-md-3 offset-sm-3 small" id="navbarNav">
                                <ul class="navbar-nav">
                                    
                                </ul>
                                
                                <div class="col text-right padding">
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
                                {/* <li className="sidebar-brand">
                                    <a href="#">
                                       
                                    </a>
                                </li> */}
                                <li className="active">
                                    <strong>
                                        <a href="#"><i class="fa fa-tachometer" aria-hidden="true"></i> &nbsp; HIGH LIGHTS</a>
                                    </strong>
                                </li>
                                <li>
                                    <strong>    
                                        <a href="#"><i class="fa fa-rss" aria-hidden="true"></i> &nbsp; ACTIVITY FEEDS</a>
                                    </strong>
                                </li>
                                <li>
                                    <strong> 
                                        <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> &nbsp; WORLD MAP</a>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        {/* <div id="page-content-wrapper"> */}
                            <div className="container-fluid">
                                <h1>Simple Sidebar</h1>
                                <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                            </div>
                        {/* </div> */}

                    </div>
				</div>
			);
 	}
}

export default Login;