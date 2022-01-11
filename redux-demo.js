const redux = require("redux")

// Create the Reducer Fuction
const couterReducer = (state={counter:0}, action)=>{
	return{
		counter: state.counter+1 // Get the old couter and plus 1
	}
}

// Create the Store
const store = redux.createStore(couterReducer)

// Get value in store
// console.log(store.getState())

// create the Subscriber
const counterSubscriber = ()=>{
	const latestState = store.getState()
	console.log(latestState)
}

// Make Reux aware of the Subscriber b pointing to the Subscriber Fuction
store.subscribe(counterSubscriber)

// Create and dispatch an action
store.dispatch({type: 'increment'})