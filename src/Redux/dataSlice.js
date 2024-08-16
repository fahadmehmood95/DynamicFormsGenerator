import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {},
  reducers: {
    addDataSuccess: (state, action) => {
      const { formName, formData } = action.payload;
      if (!state[formName]) state[formName] = [];
      state[formName].push(formData);
    },
    addData: (state, action) => {
      // Trigger Saga to handle the async task
    },
    addDataFailed: (state, action) => {},
  },
});

export const { addData, addDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;
