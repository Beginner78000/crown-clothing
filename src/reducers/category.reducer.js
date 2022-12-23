import { SET_CATEGORIES } from "../actions/category.action";

const initialState = {
    categories: [],
};

const categoriesReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case SET_CATEGORIES:
            // console.log('ICI =>>>>', action.payload);
            return {
                ...state,
                categories: action.payload,
            }
        default:
        return state;
    }
};

export default categoriesReducer;
