const DOG_LIST_ENDPOINT = 'https://dog.ceo/api/breeds/list/all';

export const getDogBreeds = () => {
    return fetch(DOG_LIST_ENDPOINT)
        .then(response => response.json())
        .then(responseJson => {
            // reshape data
            return Object.keys(responseJson.message).map(dogName=>({name: dogName, isFav: false}));
        })
        .catch((error) => {
            console.error(error);
        });
};