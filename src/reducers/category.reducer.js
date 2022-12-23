import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_FAILED,
} from "../actions/category.action";

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
};

const categoriesReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_CATEGORIES_SUCCESS:
            // console.log('ICI =>>>>', action.payload);
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
            }
        case FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        default:
        return state;
    }
};

export default categoriesReducer;
