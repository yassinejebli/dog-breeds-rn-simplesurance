import {DOGS_FETCH_BEGIN, DOGS_FETCH_SUCCESS, DOGS_FETCH_ERROR} from '../types/types';
import {getDogBreeds} from "../api/DogsAPI";

//TODO: Typing

// Internal action
const dogsFetchBegin = () => {
    return {
        type: DOGS_FETCH_BEGIN
    };
};

const dogsFetchSuccess = (dogList) => {
    return {
        type: DOGS_FETCH_SUCCESS,
        dogList
    };
};

const dogsFetchError = () => {
    return {
        type: DOGS_FETCH_ERROR
    };
};

//////////////////////
export const getDogListAction = () => {
    return dispatch => {
        dispatch(dogsFetchBegin);

        getDogBreeds().then(dogsList=>{
            dispatch(dogsFetchSuccess(dogsList));
        }).catch(error => {
            console.error('getDogListAction - error', error);
            dispatch(dogsFetchError());
        });
    };
};