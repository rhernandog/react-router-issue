import axios from "axios";


export const FETCH_POSTS = "FETCH_POSTS";

// set the root url for the api
const rootUrl = "http://reduxblog.herokuapp.com/api";
const apiKey = "?=rhernando_apikey";

export function fetchPosts(){

	// make the request
	const request = axios.get(`${rootUrl}/posts${apiKey}`);

	// finally return the action payload to the reduer
	return({
		type: FETCH_POSTS,
		payload: request
	});

}
