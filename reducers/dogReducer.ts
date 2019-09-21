import {DOGS_FETCH_BEGIN, DOGS_FETCH_ERROR, DOGS_FETCH_SUCCESS, TOGGLE_DOG_FAV} from '../types/types';
import {IDogItem} from "../actions/dogsActions";

const initialState = {
    dogList: [],
    dogFavItem: null, //for toggle param
    isLoading: false,
    error: false
};

const dogReducer = (state = initialState, {type, dogList, dogFavItem}) => {
    switch(type) {
        case DOGS_FETCH_BEGIN:
            return {...initialState, isLoading: true };
        case DOGS_FETCH_SUCCESS:
            return {...initialState, dogList: dogList};
        case DOGS_FETCH_ERROR:
            return {...initialState, error: true };
        case TOGGLE_DOG_FAV:
            return {...initialState,  dogList: state.dogList.map((dogItem: IDogItem)=>
                    dogFavItem.name === dogItem.name ? ({...dogItem, isFav: !dogItem.isFav}) : dogItem)};
        default:
            return state;
    }

};

export default dogReducer;