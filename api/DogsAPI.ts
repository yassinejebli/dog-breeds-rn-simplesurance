export const getDogBreeds = () => {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(responseJson => {
            // reshape data
            return Object.keys(responseJson.message).map(dogName=>({name: dogName, isFav: false})) as unknown; //TODO: FIX Typing
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getDogImageURLByName = (name: string) => {
    return fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            return responseJson.message;
        })
        .catch((error) => {
            console.error(error);
        });
};