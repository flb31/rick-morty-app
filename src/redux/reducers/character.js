import { 
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER,
} from '../constants/characters';
  
const initialState = {
    isFetching: false,
    error: false,
    data: [],
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
