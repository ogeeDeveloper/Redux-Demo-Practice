const redux = require("redux")

// Create the Reducer Fuction
const couterReducer = (state, action)=>{
	return{
		counter: state.counter+1 // Get the old couter and plus 1
	}
}

// Create the Store
const store = redux.createStore(couterReducer)

// create the Subscriber
const counterSubscriber = ()=>{
	store.getState()
}