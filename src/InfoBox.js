import React from 'react';
import './InfoBox.css';

const InfoBox = (props) => {
  const renderInfo=({data})=>{
  	if(data){
  	return(
  		<>
  		<div className="col-12 mx-auto col-md-4 mb-4">
	  		<div className="card card-total">
	  			<div className="card-body">
	  				<div className="card-title">
	  					<h6 className="text-muted">CoronaVirus Cases</h6>
	  				</div>
	  				<div className="card-text">
	  					<p className="danger-cases">+ {data.todayCases}</p>
	  					<p className="text-muted">Total Cases - <span>{data.cases}</span></p>
	  					<p className="text-muted">Cases Per Million - <span>{data.casesPerOneMillion}</span></p> 
	  				</div>
	  			</div>
	  		</div>
  		</div>
  		<div className="col-12 mx-auto col-md-4 mb-4">
	  		<div className="card card-recovered">
	  			<div className="card-body">
	  				<div className="card-title">
	  					<h6 className="text-muted">Recovered</h6>
	  				</div>
	  				<div className="card-text">
	  					<p className="recovered-case">+ {data.todayRecovered}</p>
	  					<p className="text-muted">Total Recovered - <span>{data.recovered}</span></p>
	  					<p className="text-muted">Recovered Per Million - <span>{data.recoveredPerOneMillion}</span></p> 
	  				</div>
	  			</div>
	  		</div>
  		</div>
  		<div className="col-12 mx-auto col-md-4 mb-4">
	  		<div className="card card-death">
	  			<div className="card-body">
	  				<div className="card-title">
	  					<h6 className="text-muted">Death</h6>
	  				</div>
	  				<div className="card-text">
	  					<p className="danger-cases">+ {data.todayDeaths}</p>
	  					<p className="text-muted">Total Cases - <span>{data.deaths}</span></p> 
	  					<p className="text-muted">Death Per Million - <span>{data.deathsPerOneMillion}</span></p>
	  				</div>
	  			</div>
	  		</div>
  		</div>
  		</>
  	)
  }
  }
  return (
    <>
    	<div className="row my-4">
    		{renderInfo(props)}
    	</div>
    	
    </>
  )
}

export default InfoBox;