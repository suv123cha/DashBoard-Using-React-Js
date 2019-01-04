import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Link } from "react-router";
import { Router, Route, browserHistory, NavLink } from "react-router-dom";

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';

import FusionMaps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

const chartConfigs = 
{
    type: 'world',
    width: '900',
    height: '450',
    dataFormat: 'json',
	dataSource: 
	{
		"chart": 
		{
			"caption": "Global Sales By Region - Month To Date",
			"subcaption": "",
			"numbersuffix": "%",
			"includevalueinlabels": "1",
			"labelsepchar": ": ",
			"markerBgColor": "#FF0000",
			"markerRadius": "10",
			"labelColor": "#000000",
			"showMarkerLabels": "1",
			"showMarkerLabelsfillcolor": "#FF0000",
			"entityfillhovercolor": "#E9F9F6",
			"theme": "fusion"
		},
		"annotations": 
		{
			"groups": 
			[
				{
					"id": "Av Item",
					"items": 
					[
						{
							"id": "cs",
							"type": "text",
							"fillcolor": "#0075c2",
							"label": "Global Total Sales Past 24hours",
							"x": "45",
							"y": "380",
							"color": "000000",
							"align": "left"
						},
						{
							"id": "cs",
							"type": "text",
							"fillcolor": "#0075c2",
							"text": "{br} $4,430,383 {br} (+$23,321)",
							"x": "230",
							"y": "400",
							"color": "000000",
							"align": "right"
						}
					]
				},
			],
		},
		"markers": 
		{
			"items": 
			[
				{
					"id": "awsOHIO",
					"shapeid": "circle",
					"x": "150.14",
					"y": "150.9",
					"label": "$1,256,654 {br} (+$21,678)",
					"value": "Coming soon",
					"tooltext": "$1,256,654 {br} (+$21,678)",
					"labelpos": "top"
				},
				{
					"id": "AWSSao",
					"shapeid": "circle",
					"x": "240.14",
					"y": "290.9",
					"label": "$676,250 {br} (+$8,230)",
					"tooltext": "$676,250 {br} (+$8,230)",
					"labelpos": "left"
				},
				{
					"id": "AWSFrank",
					"shapeid": "circle",
					"x": "355.14",
					"y": "125.9",
					"label": "$956,659 {br} (+$1,632)",
					"tooltext": "$956,659 {br} (+$1,632)",
					"labelpos": "left"
				},
				{
					"id": "AWSind",
					"shapeid": "circle",
					"x": "410.14",
					"y": "210.9",
					"label": "$322,653 {br} (-$239)",
					"tooltext": "$322,653 {br} (-$239)",
					"labelpos": "bottom"
				},
				{
					"id": "AWSSyd",
					"shapeid": "circle",
					"x": "648.14",
					"y": "305.9",
					"label": "$199,980 {br} ($0)",
					"tooltext": "$199,980 {br} ($0)",
					"labelpos": "bottom"
				},
				{
					"id": "AWSNing",
					"shapeid": "circle",
					"x": "560.14",
					"y": "169.9",
					"label": "$259,980 {br} (+$4,020)",
					"tooltext": "$259,980 {br} (+$4,020)",
					"labelpos": "bottom"
				},
				{
					"id": "AWSSing",
					"shapeid": "circle",
					"x": "560.14",
					"y": "231.9",
					"label": "$758,207 {br} (-$3,000)",
					"tooltext": "$758,207 {br} (-$3,000)",
					"labelpos": "Right"
				},
			]
		}
	}
}


class Global extends Component
{
	

	render()
	{
		return (
				<div>
                   	<div className="container-fluid">
						<div class="row">
							<div class="col-lg-8 p-r-0 title-margin-right">
								<br />
								<h1>Global Sales</h1>
                        		<p>This panel highlights our business global sales in the current month.</p>
							</div>
							<div class="col-lg-4 p-l-0 title-margin-left">
								<div class="page-header">
									<div class="page-title">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><a href="#">Dashboard</a></li>
											<li class="breadcrumb-item active">Global Sales</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<ReactFC
								{...chartConfigs}/>
						</div>
						
                    </div>
                </div>
			);
 	}
}

export default Global;