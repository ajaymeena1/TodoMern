import { createStore, compose } from "redux";
import rootReducer from './reducer/rootReducer'
// import compose from 'redux'
const thunkMiddleware =require('redux-thunk').default;
 
const applyMiddleware = require("redux").applyMiddleware
const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunkMiddleware))



const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store