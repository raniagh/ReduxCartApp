const { createSlice } = require("@reduxjs/toolkit");

const initialCartState = { cartIsVisible: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
