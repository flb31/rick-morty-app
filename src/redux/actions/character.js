import {
    FETCH_CHARACTER,
    UPDATE_NUM_PAGE_CHARACTER,
    FETCH_CHARACTER_GET,
} from '../constants/characters';
  
export const fetchCharacters = (page) => ({
    type: FETCH_CHARACTER,
    page
});

export const updateNumCharacter = (page) => ({
    type: UPDATE_NUM_PAGE_CHARACTER,
    page
});

export const fetchCharacter = (id) => ({
    type: FETCH_CHARACTER_GET,
    id
});