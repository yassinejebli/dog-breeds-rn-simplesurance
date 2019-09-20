import {DOGS_FETCH_BEGIN, DOGS_FETCH_ERROR, DOGS_FETCH_SUCCESS} from '../types/types';

const initialState = {
    dogList: [],
    isLoading: false
};

const dogReducer = (state = initialState, action: any = {}) => {
    switch(action.type) {
        case DOGS_FETCH_BEGIN:
            return { dogList: [], isLoading: true };
        case DOGS_FETCH_SUCCESS:
            return { dogList: action.dogsList, isLoading: false };
        case DOGS_FETCH_ERROR:
            return { dogList: [], isLoading: false };
        default:
            return state;
    }

};

export default dogReducer;