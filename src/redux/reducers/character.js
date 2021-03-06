import { 
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER,
    UPDATE_NUM_PAGE_CHARACTER,
    FETCH_CHARACTER_GET,
    SUCCESS_CHARACTER_GET,
    ERROR_CHARACTER_GET,
    SUCCESS_CHARACTER_SEARCH,
    ERROR_CHARACTER_SEARCH,
    FETCH_CHARACTER_SEARCH,
} from '../constants/characters';
  
const initialState = {
    isFetching: false,
    error: false,
    data: {},
    characters: {},
    page: 1,
    prev: false,
    next: false,
    query: '',
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_GET:
        case FETCH_CHARACTER_SEARCH:
        case FETCH_CHARACTER:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case SUCCESS_CHARACTER:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.page]: [
                        ...action.payload.data,
                    ],
                },
                page: action.payload.page,
                prev: action.payload.prev,
                next: action.payload.next,
                pages: action.payload.pages,
                query: action.payload.query,
                isFetching: false,
            };
        case SUCCESS_CHARACTER_SEARCH:
            return {
                ...state,
                data: {
                    [action.payload.page]: [
                        ...action.payload.data,
                    ],
                },
                page: action.payload.page,
                prev: action.payload.prev,
                next: action.payload.next,
                pages: action.payload.pages,
                query: action.payload.query,
                isFetching: false,
            };
        
        case ERROR_CHARACTER:
        case ERROR_CHARACTER_GET:
        case ERROR_CHARACTER_SEARCH:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.toString(),
            };
        case UPDATE_NUM_PAGE_CHARACTER:
            return {
                ...state,
                page: action.page,
                prev: action.page > 1,
                next: action.page < state.pages,
            }
        case SUCCESS_CHARACTER_GET:
            return {
                ...state,
                isFetching: false,
                error: false,
                characters: {
                    ...state.characters,
                    [action.payload.id]: {
                        ...action.payload.character
                    }
                }
            }
        default:
            return state;
    }
};

export default reducer;
