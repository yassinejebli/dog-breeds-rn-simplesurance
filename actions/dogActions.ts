import {
    DOGS_FETCH_BEGIN, DOGS_FETCH_SUCCESS, DOGS_FETCH_ERROR, TOGGLE_DOG_FAV,
    DOGS_REFRESH_FAV_LIST
} from '../types/types';
import {getDogBreeds} from "../api/dogAPI";

export interface IDogItem {
    name: string;
    isFav?: boolean;
}

export type IDogList = IDogItem[];

////////////////////////// Internal actions
const dogsFetchBegin = () => {
    return {
        type: DOGS_FETCH_BEGIN
    };
};

const dogsFetchSuccess = (dogList: IDogList) => {
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

export const toggleDogFavAction = (dogFavItem: IDogItem) => {
    return (dispatch) => {
        dispatch({type: TOGGLE_DOG_FAV, dogFavItem});
        dispatch(refreshDogFavListAction());// refresh dog fav list
    }
};

const refreshDogFavListAction = () => {
    return {
        type: DOGS_REFRESH_FAV_LIST
    };
};
//////////////////////// End internal actions


export const getDogListAction = () => {
    return (dispatch) => {
        dispatch(dogsFetchBegin());

        getDogBreeds().then((dogList: IDogList)=>{
            //Already sorted on the backend
            const sortedDogList = dogList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            dispatch(dogsFetchSuccess(sortedDogList));
        }).catch(error => {
            dispatch(dogsFetchError());
            // console.error('getDogListAction - error', error);
        });
    };
};