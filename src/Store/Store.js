import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import DaysReducer from "../Reducers/daysReducer";
import RootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";

var allReducers = combineReducers({ days: DaysReducer, root: RootReducer });

const middleware = [thunk];

const Store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
