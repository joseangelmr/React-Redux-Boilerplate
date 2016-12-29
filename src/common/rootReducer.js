import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    homeReducer
});

export default rootReducer;