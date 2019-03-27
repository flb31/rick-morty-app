const BASEURL = 'https://rickandmortyapi.com/api/';

export const listCharacters = (page, q) => {
    return fetch(`${BASEURL}/character?page=${page}&name=${q}`)
        .then(response => response.json());
}

export const getCharacter = (id) => {
    return fetch(`${BASEURL}/character/${id}`)
        .then(response => response.json());
}
