import React, { Component } from 'react';
//import { Link } from "react-router";
import { Router, Route, browserHistory, NavLink } from "react-router-dom";
import "../assets/css/high-cards.css";

class Highlight extends Component
{
	constructor()
	{
		super();
		this.state = 
		{
			data: null,
		}
	}

	/**
	 * One of react lifecycle method
	 */
	componentWillMount()
	{
		this.fetchHightlightDetails();
	}

	/**
	 * This function is responsible for fetching the 
	 * data from the json generator and setting the state
	 */
	fetchHightlightDetails()
	{
		let url = "http://www.json-generator.com/api/json/get/cgkCVpuztu?indent=4";
		let data = fetch(url).then((resp)=>
		{
			resp.json().then((res) => 
			{
				this.setState({ data:res })
			})
		})
	}
	
		
	render()
	{
		return (
				<div>
                    <div className="container-fluid" >
						<div class="row">
							<div class="col-lg-8 p-r-0 title-margin-right">
								<br />
								<h1>HighLights</h1>
                        		<p>This panel highlights few of our business areas and its earnings over the past weeks.</p>
							</div>
							<div class="col-lg-4 p-l-0 title-margin-left">
								<div class="page-header">
									<div class="page-title">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><a href="#">Dashboard</a></li>
											<li class="breadcrumb-item active">Highlight</li>
										</ol>
									</div>
								</div>
							</div>
						</div>

						
						<div class="index-content">
							
							{
								this.state.data ?
								this.state.data.map((item) => 
									<a href="#">
										<div class="col-4 col-xs-4">
											<div class="card">
												<br />
												<h4>{item.amount}</h4>
												<p>{item.companyName}</p>
												<a href="#" class="blue-button">Read More</a>
											</div>
										</div>
									</a>)
								:
								<a href="#">
									<div class="col-lg-4">
										<div class="card">
											<br />
											<h4>Data Loading...</h4>
											<p>Loading....</p>
											<a href="#" class="blue-button">Read More</a>
										</div>
									</div>
								</a>
							}
						</div>

                    </div>
                </div>
			);
 	}
}

export default Highlight;