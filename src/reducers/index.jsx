import { combineReducers } from 'redux';

// get the posts reducer
import PostsReducer from "./posts-reducer.jsx";

const rootReducer = combineReducers({
  
  posts: PostsReducer

});

export default rootReducer;
