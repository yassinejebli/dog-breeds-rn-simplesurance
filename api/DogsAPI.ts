const DOG_LIST_ENDPOINT = 'https://dog.ceo/api/breeds/list/all';

export const getDogBreeds = () => {
    return fetch(DOG_LIST_ENDPOINT)
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log('aaa',  Object.keys(responseJson.message));
            return Object.keys(responseJson.message);
        })
        .catch((error) => {
            console.error(error);
        });
};