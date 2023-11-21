import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    employeeData: {}
  },
  reducers: {
    submitForm: (state, action) => {
      state.employeeData = action.payload;
    },
  },
});

export const { submitForm } = formSlice.actions;

export default formSlice.reducer;
