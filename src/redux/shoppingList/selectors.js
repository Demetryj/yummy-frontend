export const selectShoppingList = state => {
  console.log(state);
  return state.shoppingList.items;
};
export const selectError = state => state.shoppingList.error;
export const selectIsLoading = state => state.shoppingList.isLoading;
