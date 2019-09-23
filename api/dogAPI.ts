export const getDogBreeds = () => {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.status === 'success')    // reshape data
                return Object.keys(responseJson.message).map(dogName=>({name: dogName, isFav: false})) as unknown; //TODO: FIX Typing
            else
                throw new Error('Invalid response!');
        })
        .catch((error) => {
            throw new Error(error);
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