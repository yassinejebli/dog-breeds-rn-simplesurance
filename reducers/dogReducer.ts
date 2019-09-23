import {
    DOGS_FETCH_BEGIN, DOGS_FETCH_ERROR, DOGS_FETCH_SUCCESS, DOGS_REFRESH_FAV_LIST,
    TOGGLE_DOG_FAV
} from '../types/types';
import {IDogItem} from "../actions/dogsActions";

const initialState = {
    dogList: [],
    dogFavList: [],
    dogFavItem: null, //for toggle param
    isLoading: false,
    error: false
};

const dogReducer = (state = initialState, {type, dogList, dogFavItem}) => {
    switch(type) {
        case DOGS_FETCH_BEGIN:
            return {...state, error: false, isLoading: true };
        case DOGS_FETCH_SUCCESS:
            return {...state, isLoading: false, error: false, dogList: dogList};
        case DOGS_FETCH_ERROR:
            return {...state, error: true, isLoading: false };
        case TOGGLE_DOG_FAV:
            return {...state, isLoading: false, error: false, dogList: state.dogList.map((dogItem: IDogItem)=>
                    dogFavItem.name === dogItem.name ? ({...dogItem, isFav: !dogItem.isFav}) : dogItem)};
        case DOGS_REFRESH_FAV_LIST:
            return {...state, dogFavList: state.dogList.filter((dogItem: IDogItem)=>dogItem.isFav)};
        default:
            return state;
    }
};

export default dogReducer;