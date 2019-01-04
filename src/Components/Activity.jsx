import React, { Component } from 'react';
//import { Link } from "react-router";
import { Router, Route, browserHistory, NavLink } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import "../assets/css/scroll.css";


class Activity extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			tableData: null,
		}
	}


   /**
	 * One of react lifecycle method
	 */
	componentWillMount()
	{
		this.fetchActivityFeedDetails();
	}



	/**
	 * This function is responsible for fetching the 
	 * data from the json generator and setting the state
	 */
	fetchActivityFeedDetails()
	{
		let url = "http://www.json-generator.com/api/json/get/cfpadZENLm?indent=4";
		let data = fetch(url).then((resp)=>
		{
			resp.json().then((res) => 
			{
				this.setState({ tableData:res })
			})
		})
	}

	render()
	{
		return (
				<div>
                    <div className="container-fluid"  style={{marginTop: "-2%"}}>
						<div class="row">
							<div class="col-lg-8 p-r-0 title-margin-right">
								<br />
								<h1>Activity Feeds</h1>
                        		<p>This panel highlights few of our business activites that are going on throught out the globe.</p>
							</div>
							<div class="col-lg-4 p-l-0 title-margin-left">
								<div class="page-header">
									<div class="page-title">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><a href="#">Dashboard</a></li>
											<li class="breadcrumb-item active">Activity Feed</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<BootstrapTable
								data={ this.state.tableData }
								pagination>
								<TableHeaderColumn width="51" dataField='slNo' isKey>S.No</TableHeaderColumn>
								<TableHeaderColumn dataField='activityFeed'>Activity Details</TableHeaderColumn>
								<TableHeaderColumn width="100" dataField='state'>City</TableHeaderColumn>
								<TableHeaderColumn width="100" dataField='country'>State</TableHeaderColumn>
							</BootstrapTable>
						</div>
                    </div>
                </div>
			);
 	}
}

export default Activity;