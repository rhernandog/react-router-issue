// get the action type to fetch the posts
import { FETCH_POSTS } from "../actions/index.jsx";

// all-> all the posts in the blog stored in an array
// post-> the current selected post. when the user clicks on a post in order to
// read it, it will be stored here in this property of the app's state
const INITIAL_STATE = { all:[], post:null };

export default function(state=INITIAL_STATE, action){

	switch(action.type){

		// fetch posts type
		case FETCH_POSTS:
			// get the new data from the server and add it to the current state
			// array of posts which by default is an empty array or the current
			// collection of posts, if any
			console.log( state );
			let newState = { ...state, all:[1, 2, 3, 4] };
			console.log( newState );

			return newState;

		default: 
			return state;

	} // switch end

}
