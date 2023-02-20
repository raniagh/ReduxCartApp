const { createSlice } = require("@reduxjs/toolkit");

const initialCartState = { counter: 0, showCart: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
