import { 
    SUCCESS_EXAMPLE,
    ERROR_EXAMPLE,
    FETCH_EXAMPLE,
} from './../constants/example';
  
const initialState = {
    isFetching: false,
    error: false,
    data: {},
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAMPLE:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case SUCCESS_EXAMPLE:
            return {
                ...state,
                data: {
                    ...action.payload,
                },
                isFetching: false,
            };
        case ERROR_EXAMPLE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
