export const fetchIngredientFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addIngredientFulfilled = (state, action) => {
  state.items.push(action.payload);
};

export const deleteIngredientFulfilled = (state, action) => {
  const filteredList = state.items.filter(
    n => n._id.toString() !== action.payload.id
  );
  state.items = filteredList;
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
