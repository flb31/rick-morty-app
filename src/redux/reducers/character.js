import { 
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER,
    UPDATE_NUM_PAGE_CHARACTER,
} from '../constants/characters';
  
const initialState = {
    isFetching: false,
    error: false,
    data: {},
    page: 1,
    prev: false,
    next: false,
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
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
                isFetching: false,
            };
        case ERROR_CHARACTER:
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
        default:
            return state;
    }
};

export default reducer;
