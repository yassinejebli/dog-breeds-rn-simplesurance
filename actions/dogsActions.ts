import {DOGS_FETCH_BEGIN, DOGS_FETCH_SUCCESS, DOGS_FETCH_ERROR} from '../types/types';
import {getDogBreeds} from "../api/DogsAPI";
import {Action, Dispatch} from "redux";

//TODO: Fix typing
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
//////////////////////// End internal actions


export const getDogListAction = () => {
    return (dispatch: Dispatch<IDogsActions>) => {
        dispatch(dogsFetchBegin());

        getDogBreeds().then((dogList: IDogList)=>{
            //Already sorted by backend
            const sortedDogList = dogList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            dispatch(dogsFetchSuccess(sortedDogList));
        }).catch(error => {
            console.error('getDogListAction - error', error);
            dispatch(dogsFetchError());
        });
    };
};