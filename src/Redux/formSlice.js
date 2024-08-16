import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "forms",
  initialState: [],
  reducers: {
    addFormSuccess: (state, action) => {
      state.push(action.payload);
    },
    addForm: (state, action) => {
      // Trigger Saga to handle the async task
    },
    addFormFailure: (state, action) => {
      // Trigger Saga to handle the async task
    },
  },
});

export const { addForm, addFormSuccess, addFormFailure } = formSlice.actions;
export default formSlice.reducer;
