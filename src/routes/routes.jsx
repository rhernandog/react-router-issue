import React, { Component } from "react";

// import react router elements
import { Route, IndexRoute } from "react-router";

// import the main component
import App from "../components/app.jsx";
// import the post index component
import PostsIndex from "../components/post-index.jsx";


class Hello extends Component {

	render(){

		return(
			<div className="container bg-primary">
				<div className="row">
					<div className="col-sm-12">HELLO WOOOOORLD!!!!!</div>
				</div>
			</div>
		);

	}

}


export default (

	<Route path="/" component={PostsIndex}>
		<Route path="/hello" component={Hello} />
	</Route>

);

