import { getCategoriesAndDocuments } from '../utils/firebase'

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILED = 'FETCH_CATEGORIES_FAILED';

export const fetchCategoriesStart = () => ({
    type: FETCH_CATEGORIES_START,
});

export const fetchCategoriesSucces = (categoriesArray) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
    type: FETCH_CATEGORIES_FAILED,
    payload: error,
});

// On cherche à déterminer comment récupérer ces catégories
// Quoi faire quand ça réussit et quoi faire en cas d'échec
export const fetchCategoriesAsync = () => async (dispatch) => {
    
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSucces(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
    
}