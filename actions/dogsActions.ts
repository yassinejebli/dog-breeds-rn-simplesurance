import {DOGS_FETCH_BEGIN, DOGS_FETCH_SUCCESS, DOGS_FETCH_ERROR, TOGGLE_DOG_FAV} from '../types/types';
import {getDogBreeds} from "../api/DogsAPI";
import {Action, Dispatch} from "redux";

export interface IDogItem {
    name: string;
    isFav?: boolean;
}

export type IDogList = IDogItem[];

export interface IDogsActions extends Action {
    dogList?: IDogList;
}


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
    return {
        type: TOGGLE_DOG_FAV,
        dogFavItem
    };
};
//////////////////////// End internal actions


export const getDogListAction = () => {
    return (dispatch: Dispatch<IDogsActions>) => {
        dispatch(dogsFetchBegin());

        getDogBreeds().then((dogList: IDogList)=>{
            //Already sorted on the backend
            const sortedDogList = dogList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            dispatch(dogsFetchSuccess(sortedDogList));
        }).catch(error => {
            console.error('getDogListAction - error', error);
            dispatch(dogsFetchError());
        });
    };
};