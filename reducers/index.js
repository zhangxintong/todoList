import todos form "./todos";
import visibilityFilter from "./visibilityFilter";
import{combinedReducers } from "redux";

const todoApp = combinedReducers({
	todos,
	visibilityFilter
})

export default todoApp;