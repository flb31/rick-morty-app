import {
    FETCH_CHARACTER,
} from '../constants/characters';
  
export const fetchCharacter = (page) => ({
    type: FETCH_CHARACTER,
    page
});
