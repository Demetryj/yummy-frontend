// selectors;

export const selectRecipes = state => state.recipes.items;

export const selectIsLoading = state => state.recipes.isLoading;

export const selectError = state => state.recipes.error;

export const selectRecipesPopular = state => state.recipes.popular;

export const selectCategories = state => state.recipes.categories;

