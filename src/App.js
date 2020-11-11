import React from 'react';
import Header from './Header'
import Table from './Table'


const App = (props) => {
  return (
    <>
    	<div className="container-fluid py-4 px-4">
	    	<div className="row">
	    		<div className="col mx-auto col-lg-9">
	    			<Header/>
	    		</div>
	    		<div className="col mx-auto col-lg-3">
	    			<Table/>
	    		</div>
	    	</div>
    	</div>
    	<hr/>
    	<p className="text-secondary text-center">Developed By Abhinav Mishra &copy;</p>
    </>
  )
}

export default App;