import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from '../redux/authentication/authentication-reducer';
import mediaReducer from '../redux/media/media-reducer';
import mediaMiddleware from './media/media-middleware';

export function configureStore() {
    return createStore(
        combineReducers({
            authReducer,
            mediaReducer
        }),
        applyMiddleware(
            mediaMiddleware
        )
    );
}