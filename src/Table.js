import React, { Component } from 'react';
import './Table.css';

const url = `https://disease.sh/v3/covid-19/countries?sort=cases`;
export default class Table extends Component {
	constructor(){
		super()
		this.state={
			country:''
		}
	}
	renderTable=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<tr>
						<td>{item.country}</td>
						<td>{item.cases}</td>
					</tr>
				)
			})
		}
	}
	render() {
		return (
			<>
				<div className="card card-table">
					<h5 className="text-center pt-2">LIVE CASES BY COUNTRY</h5>
					<div className="card-body">
						<table className="table table-hover table-striped table-borderless">
							<tbody>
							 {this.renderTable(this.state.country)}
							</tbody>
						</table>
					</div>
				</div>
				
			</>
		);
	}
	componentDidMount(){
		fetch(url,{method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{this.setState({country: data})});
	}
}
