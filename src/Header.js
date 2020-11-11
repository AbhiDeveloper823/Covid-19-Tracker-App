import React, { Component } from 'react';
import InfoBox from './InfoBox';
import './Header.css'

const url = `https://disease.sh/v3/covid-19/countries`;
export default class Header extends Component {
	constructor(){
		super()
		this.state={
			country:'',
			country_info:''
		}
	}
	renderOption=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<option value={item.countryInfo.iso2} key={item.countryInfo.iso2}>{item.country}</option>
				)
			})
		}
	}
	getIso=(e)=>{
		let country_iso = e.target.value;
		let mainUrl;
		if(country_iso == "all"){
			mainUrl = `https://disease.sh/v3/covid-19/all`
		}
		else{
			mainUrl = `https://disease.sh/v3/covid-19/countries/${country_iso}?strict=true`
		}
		fetch(mainUrl, {method:"GET"})
		.then((res)=> res.json())
		.then((data)=>{
			this.setState({country_info : data})
		})
	}
	render() {
		return (
			<>
				<div className="d-flex justify-content-between align-items-center flex-wrap my-2 text-center">
					<h2 style={{color: '#fa025d'}}>COVID-19 TRACKER</h2>
					<select onChange={this.getIso} className="select">
						<option value="all">Worldwide</option>
						{this.renderOption(this.state.country)}
					</select>
				</div>

				<InfoBox data={this.state.country_info}/>
				
			</>
		);
	}
	componentDidMount(){
		fetch(url, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({country:data});
		})

		fetch(`https://disease.sh/v3/covid-19/all`, {method:"GET"})
		.then((res)=> res.json())
		.then((data)=>{
			this.setState({country_info: data})
		})
	}
}
