const BASEURL = 'https://rickandmortyapi.com/api/';

export const listCharacters = (page) => {
    return fetch(`${BASEURL}/character?page=${page}`)
        .then(response => response.json());
}

export const getCharacter = (id) => {
    return fetch(`${BASEURL}/character/${id}`)
        .then(response => response.json());
}
