import {
    FETCH_CHARACTER, UPDATE_NUM_PAGE_CHARACTER,
} from '../constants/characters';
  
export const fetchCharacter = (page) => ({
    type: FETCH_CHARACTER,
    page
});

export const updateNumCharacter = (page) => ({
    type: UPDATE_NUM_PAGE_CHARACTER,
    page
});
