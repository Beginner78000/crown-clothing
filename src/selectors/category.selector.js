import { createSelector } from "reselect";

// Memoization suppose que tant que les entrées n'ont pas changé
// la sortie est toujours la même (même fonctionnement que les fonction pure)
// Pour cela, nous avons besoin des inputSelectors qui vont donner les paramètres
// dont nous avons besoin pour déterminer ce que devrait être notre sortie
const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    // Array of inputSelectors
    // Quelles sont les parts de Redux que j'ai besoin d'utiliser 
    [selectCategoryReducer],
    // pour pouvoir produire quelque chose de nouveau à l'extérieur
    // outputSelector
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
      categories.reduce((acc, category) => {
        const { title, items } = category;
            // On construit l'accumulateur, qui débute avec un objet vide
            acc[title.toLowerCase()] = items;
            // Puis on le renvoie
            return acc;
        }, [])
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
