import {
    FETCH_CHARACTER,
    UPDATE_NUM_PAGE_CHARACTER,
    FETCH_CHARACTER_GET,
    FETCH_CHARACTER_SEARCH,
} from '../constants/characters';
  
export const fetchCharacters = (page, query = '') => ({
    type: FETCH_CHARACTER,
    page,
    query,
});

export const updateNumCharacter = (page) => ({
    type: UPDATE_NUM_PAGE_CHARACTER,
    page
});

export const fetchCharacter = (id) => ({
    type: FETCH_CHARACTER_GET,
    id
});

export const fetchSearchCharacters = (query) => ({
    type: FETCH_CHARACTER_SEARCH,
    page: 1,
    isSearching: true,
    query,
});