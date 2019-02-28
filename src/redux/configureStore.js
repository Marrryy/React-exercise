import {createStore, combineReducers, applyMiddleware } from 'redux';
// import { Reducer, initialState } from './reducer'
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    // const store = createStore(
    //     Reducer, // reducer
    //     initialState, // our initialState
    // );
    
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
        
        );
        

    return store;
}