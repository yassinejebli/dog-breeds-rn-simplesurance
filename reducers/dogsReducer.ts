import {DOGS_FETCH_BEGIN, DOGS_FETCH_ERROR, DOGS_FETCH_SUCCESS} from '../types/types';

const initialState = {
    dogList: [],
    isLoading: false,
    error: false
};

const dogReducer = (state = initialState, {type, dogList}) => {
    switch(type) {
        case DOGS_FETCH_BEGIN:
            return {...initialState, dogList: [], isLoading: true };
        case DOGS_FETCH_SUCCESS:
            return {...initialState, dogList: dogList, isLoading: false };
        case DOGS_FETCH_ERROR:
            return {...initialState, dogList: [], isLoading: false, error: true };
        default:
            return state;
    }

};

export default dogReducer;