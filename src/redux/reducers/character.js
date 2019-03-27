import { 
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER,
} from '../constants/characters';
  
const initialState = {
    isFetching: false,
    error: false,
    data: [],
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
                data: [
                    ...action.payload,
                ],
                page: action.page,
                prev: action.prev,
                next: action.next,
                isFetching: false,
            };
        case ERROR_CHARACTER:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.toString(),
            };
        default:
            return state;
    }
};

export default reducer;
