import React, { Component } from "react";

// get the elements to connect the component with the actions
// and state in order to access those here
import { connect } from "react-redux";

// get the fetch posts action creator
import { fetchPosts } from "../actions/index.jsx";


class PostsIndex extends Component {


	// use this instance to fetch the posts data from the server
	componentDidMount(){

		// fetch all the posts
		this.props.fetchPosts();

	}


	render(){

			return (
			<div className="container">

				<div className="row">
					<div className="col-sm-12 bg-success text-white">
						POSTS INDEX!!!
					</div>
				</div>
				
			</div>
		);

	}

}

// 
export default connect(null, { fetchPosts })(PostsIndex);
