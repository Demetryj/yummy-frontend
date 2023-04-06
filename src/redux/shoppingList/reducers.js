export const fetchIngredientFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addIngredientFulfilled = (state, action) => {
  state.items.push(action.payload);
};

export const deleteIngredientFulfilled = (state, action) => {
  const index = state.items.findIndex(
    ingredient => ingredient.id === action.payload
  );
  state.items.splice(index, 1);
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
